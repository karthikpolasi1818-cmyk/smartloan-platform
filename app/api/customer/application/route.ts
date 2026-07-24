import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

import { verifyToken } from "@/lib/auth";

import { loanApplicationSchema } from "@/lib/validations/loanSchema";

import { sanitizeObject } from "@/lib/security/sanitize";

import { randomUUID } from "crypto";





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





if(!user){


return NextResponse.json(

{

success:false,

message:"Invalid session"

},

{
status:401
}

);


}







const body =

await request.json();




// SANITIZE INPUT

const cleanBody =

sanitizeObject(body);





// VALIDATE

const validation =

loanApplicationSchema.safeParse(cleanBody);






if(!validation.success){


return NextResponse.json(

{

success:false,

message:"Validation failed",

errors:
validation.error.flatten()

},

{
status:400
}

);


}







const data = validation.data;






const applicationId =

"SL-" +

randomUUID()

.substring(0,8)

.toUpperCase();







const application =

await prisma.loanApplication.create({

data:{



loanType:data.loanType,


fullName:data.fullName,


email:data.email,


phone:data.phone,


pan:data.pan,


aadhaar:data.aadhaar,


address:data.address || null,


city:data.city || null,


state:data.state || null,



employmentType:

data.employmentType || null,



companyName:

data.companyName || null,



monthlyIncome:

data.monthlyIncome || null,



loanAmount:data.loanAmount,


tenure:data.tenure,


interestRate:data.interestRate,



applicationId,


userId:user.id,


status:"SUBMITTED",


approvalStatus:"PENDING"


}

});







await prisma.loanStatusHistory.create({

data:{


applicationId:application.id,


status:"SUBMITTED",


remark:"Application submitted"

}

});







return NextResponse.json(

{

success:true,

message:"Loan application submitted",

application:{


id:application.id,

applicationId:
application.applicationId,

status:
application.status


}

}

);



}

catch(error){


console.error(
"APPLICATION ERROR:",
error
);




return NextResponse.json(

{

success:false,

message:"Application submission failed"

},

{
status:500
}

);


}


}