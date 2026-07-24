import { NextRequest, NextResponse } from "next/server";


import { prisma } from "@/lib/prisma";


import bcrypt from "bcryptjs";


import { loginSchema } from "@/lib/validations/authSchema";


import { createToken } from "@/lib/auth";





export async function POST(

request: NextRequest

) {


try {



const body = await request.json();





// ZOD VALIDATION

const validation =

loginSchema.safeParse(body);





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

email,

password

} = validation.data;







// FIND USER

const user =

await prisma.user.findUnique({

where:{

email

}

});







if(!user){


return NextResponse.json(

{

success:false,

message:"Invalid email or password"

},

{

status:401

}

);


}








// PASSWORD CHECK

const passwordMatch =

await bcrypt.compare(

password,

user.password

);







if(!passwordMatch){


return NextResponse.json(

{

success:false,

message:"Invalid email or password"

},

{

status:401

}

);


}







// CREATE JWT TOKEN

const token = createToken({

id:user.id,

email:user.email,

role:user.role

});







// ROLE BASED REDIRECT

let redirect = "/dashboard";



if(

user.role === "ADMIN"

||

user.role === "LOAN_MANAGER"

){


redirect="/admin";


}








// RESPONSE

const response =

NextResponse.json(

{

success:true,

message:"Login successful",

redirect,


user:{


id:user.id,

name:user.name,

email:user.email,

role:user.role


}


}

);








// SECURE COOKIE

response.cookies.set(

"token",

token,

{


httpOnly:true,


secure:

process.env.NODE_ENV === "production",


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

"LOGIN ERROR:",

error

);





return NextResponse.json(

{

success:false,

message:"Login failed"

},

{

status:500

}

);


}


}