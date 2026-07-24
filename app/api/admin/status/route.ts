import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

import { verifyToken } from "@/lib/auth";

import { sanitizeObject } from "@/lib/security/sanitize";





export async function POST(

request:NextRequest

){


try{


const token =

request.cookies.get("token")?.value;




if(!token){


return NextResponse.json(

{

success:false,

message:"Unauthorized"

},

{
status:401
}

);


}





const user =

verifyToken(token);






if(

!user ||

(

user.role !== "ADMIN"

&&

user.role !== "LOAN_MANAGER"

)

){


return NextResponse.json(

{

success:false,

message:"Access denied"

},

{
status:403
}

);


}







const body =

await request.json();





const cleanBody =

sanitizeObject(body);






const {

applicationId,

status

}=cleanBody;






if(!applicationId || !status){


return NextResponse.json(

{

success:false,

message:"Missing fields"

},

{
status:400
}

);


}







const application =

await prisma.loanApplication.update({

where:{

id:applicationId

},

data:{


approvalStatus:status,


status

}

});







await prisma.loanStatusHistory.create({

data:{


applicationId:


application.id,


status,


remark:

`Status updated to ${status}`


}

});







return NextResponse.json(

{

success:true,

message:"Application status updated",

application

}

);



}

catch(error){


console.error(
"STATUS UPDATE ERROR:",
error
);



return NextResponse.json(

{

success:false,

message:"Status update failed"

},

{
status:500
}

);


}


}