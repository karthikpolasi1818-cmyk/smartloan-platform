import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

import bcrypt from "bcryptjs";

import { registerSchema } from "@/lib/validations/authSchema";

import { sanitizeObject } from "@/lib/security/sanitize";

import { createToken } from "@/lib/auth";





export async function POST(
request: NextRequest
) {


try {


const body = await request.json();



// SANITIZE INPUT

const cleanBody =
sanitizeObject(body);



// VALIDATE INPUT

const validation =
registerSchema.safeParse(cleanBody);





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





const {

name,

email,

password

} = validation.data;







// CHECK USER

const existingUser =

await prisma.user.findUnique({

where:{
email
}

});






if(existingUser){


return NextResponse.json(

{

success:false,

message:"Email already registered"

},

{
status:400
}

);


}







// HASH PASSWORD

const hashedPassword =

await bcrypt.hash(

password,

10

);







// CREATE USER

const user =

await prisma.user.create({

data:{


name,


email,


password:hashedPassword,


role:"CUSTOMER"


}

});







// CREATE JWT

const token = createToken({

id:user.id,

email:user.email,

role:user.role

});








const response =

NextResponse.json(

{

success:true,

message:"Registration successful",

user:{


id:user.id,

name:user.name,

email:user.email,

role:user.role


}

}

);







response.cookies.set(

"token",

token,

{


httpOnly:true,

secure:
process.env.NODE_ENV==="production",

sameSite:"strict",

maxAge:
60 * 60 * 24 * 7,

path:"/"

}

);






return response;



}

catch(error){


console.error(
"REGISTER ERROR:",
error
);



return NextResponse.json(

{

success:false,

message:"Registration failed"

},

{
status:500
}

);


}


}