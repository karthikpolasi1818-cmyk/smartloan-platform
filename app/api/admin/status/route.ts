import { NextResponse } from "next/server";


import { prisma } from "@/lib/prisma";



import {
sendEmail
}
from "@/services/email/emailService";



import {

loanApprovedEmail,

loanRejectedEmail

}

from "@/services/email/templates/loanTemplates";







export async function PUT(

request:Request

){


try{


const body =

await request.json();







const updatedApplication =

await prisma.loanApplication.update({

where:{


id:
body.id


},



data:{


status:
body.status,



approvalStatus:
body.status,



adminRemark:
body.remark


}



});









// Save timeline history

await prisma.loanStatusHistory.create({

data:{


applicationId:
updatedApplication.id,


status:
body.status,


remark:
body.remark


}



});









// Send approval email

if(
body.status==="APPROVED"
){



await sendEmail(


updatedApplication.email,


"SmartLoan Loan Approved",



loanApprovedEmail(

updatedApplication.fullName,


body.remark

)


);



}









// Send rejection email

if(

body.status==="REJECTED"

){



await sendEmail(


updatedApplication.email,


"SmartLoan Loan Rejected",



loanRejectedEmail(

updatedApplication.fullName,


body.remark

)


);



}








return NextResponse.json({

success:true,

data:
updatedApplication


});



}

catch(error){


console.log(

"Status Update Error:",

error

);



return NextResponse.json(

{

success:false,

message:
"Status update failed"

},

{

status:500

}

);



}



}