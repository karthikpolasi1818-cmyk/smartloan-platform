import {NextResponse} from "next/server";

import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

import {prisma} from "@/lib/prisma";



export async function POST(
request:Request
){

const body =
await request.json();



const user =
await prisma.user.findUnique({

where:{
email:body.email
}

});



if(!user){

return NextResponse.json({

message:"Invalid email"

},
{
status:401
}

);

}



const valid =
await bcrypt.compare(

body.password,

user.password

);



if(!valid){

return NextResponse.json({

message:"Invalid password"

},

{
status:401
}

);

}



const token =
jwt.sign(

{

id:user.id,

role:user.role

},

"SMARTLOAN_SECRET",

{
expiresIn:"1d"
}

);



return NextResponse.json({

success:true,

token,

role:user.role

});


}