import { NextRequest } from "next/server";

import { verifyToken } from "./auth";



export function checkAdmin(

request:NextRequest

){


const token =

request.cookies.get(
"token"
)?.value;



if(!token){

return false;

}



const user =
verifyToken(token);



if(!user){

return false;

}



return (

user.role==="ADMIN"

||

user.role==="LOAN_MANAGER"

);


}