import { NextResponse } from "next/server";



export async function POST(){


const response = NextResponse.json(

{

success:true,

message:"Logout successful"

}

);



// Remove JWT cookie

response.cookies.set(

"token",

"",

{


httpOnly:true,

expires:new Date(0),

sameSite:"lax",

secure:process.env.NODE_ENV==="production"


}

);



return response;


}