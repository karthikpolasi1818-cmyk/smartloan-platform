import {
NextResponse
}
from "next/server";


import type {
NextRequest
}
from "next/server";



import {
verifyToken
}
from "@/lib/auth/verifyToken";





export function middleware(
request:NextRequest
){


const token =
request.cookies.get("token")?.value;



const role =
request.cookies.get("role")?.value;



const path =
request.nextUrl.pathname;






// Admin protection

if(
path.startsWith("/admin")
){


if(!token){

return NextResponse.redirect(

new URL("/login",request.url)

);

}




const user:any =
verifyToken(token);



if(
!user ||
user.role !== "ADMIN"

){

return NextResponse.redirect(

new URL("/login",request.url)

);


}


}







// Customer protection

if(

path.startsWith("/apply")

||

path.startsWith("/dashboard")

){



if(!token){


return NextResponse.redirect(

new URL("/login",request.url)

);


}



}






return NextResponse.next();


}







export const config = {


matcher:[

"/admin/:path*",

"/apply/:path*",

"/dashboard/:path*"

]


};