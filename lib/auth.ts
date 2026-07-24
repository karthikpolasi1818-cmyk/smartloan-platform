import jwt from "jsonwebtoken";


const JWT_SECRET =

process.env.JWT_SECRET || "SMARTLOAN_SECRET";



export interface TokenPayload {

id:string;

email:string;

role:string;

}





export function createToken(

payload:TokenPayload

){


return jwt.sign(

payload,

JWT_SECRET,

{

expiresIn:"7d"

}

);


}





export function verifyToken(

token:string

):TokenPayload | null {


try{


const decoded =

jwt.verify(

token,

JWT_SECRET

);




return decoded as TokenPayload;



}

catch(error){


return null;


}


}