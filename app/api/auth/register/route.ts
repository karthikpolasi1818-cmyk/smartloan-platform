import {NextResponse} from "next/server";

import bcrypt from "bcrypt";

import {prisma} from "@/lib/prisma";



export async function POST(
request:Request
){

try{


const body =
await request.json();



const existingUser =
await prisma.user.findUnique({

where:{
email:body.email
}

});



if(existingUser){

return NextResponse.json({

message:"User already exists"

},
{
status:400
}

);

}



const hashedPassword =
await bcrypt.hash(
body.password,
10
);



const user =
await prisma.user.create({

data:{


name:body.name,


email:body.email,


password:hashedPassword,


role:
body.role || "CUSTOMER"


}

});



return NextResponse.json({

success:true,

user

});


}


catch(error){


return NextResponse.json({

success:false,

message:"Registration failed"

},

{
status:500
}

);


}


}