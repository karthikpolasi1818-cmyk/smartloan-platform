import { NextRequest, NextResponse } from "next/server";


import { verifyToken } from "@/lib/auth";




export async function GET(

request:NextRequest

){



try{


const token =

request.cookies.get(
"token"
)?.value;




if(!token){


return NextResponse.json(

{

success:false,

message:"Not authenticated"

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

message:"Invalid token"

},

{

status:401

}

);


}





return NextResponse.json(

{


success:true,


user



}

);



}

catch(error){


return NextResponse.json(

{

success:false,

message:"Authentication failed"

},

{

status:500

}

);


}



}