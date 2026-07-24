import { NextRequest,NextResponse } from "next/server";

import { verifyToken } from "@/lib/auth";




export function middleware(

request:NextRequest

){



const token =

request.cookies.get("token")?.value;



const path =

request.nextUrl.pathname;





if(

path.startsWith("/dashboard")

||

path.startsWith("/apply")

){


if(!token){


return NextResponse.redirect(

new URL(
"/login",
request.url
)

);


}



const user =

verifyToken(token);



if(!user){


return NextResponse.redirect(

new URL(
"/login",
request.url
)

);


}


}





if(

path.startsWith("/admin")

){



if(!token){


return NextResponse.redirect(

new URL(
"/login",
request.url
)

);


}




const user =

verifyToken(token);





if(

!user

||

(

user.role !== "ADMIN"

&&

user.role !== "LOAN_MANAGER"

)

){



return NextResponse.redirect(

new URL(
"/dashboard",
request.url
)

);


}



}





return NextResponse.next();


}






export const config = {


matcher:[

"/dashboard/:path*",

"/apply/:path*",

"/admin/:path*"

]


};