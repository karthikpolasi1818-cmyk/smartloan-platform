import { NextResponse } from "next/server";


import { prisma } from "@/lib/prisma";


import {
  loanSchema
} from "@/schemas/loanSchema";


import {
  sendEmail
} from "@/services/email/emailService";


import {
  applicationSubmittedEmail
} from "@/services/email/templates/loanTemplates";







export async function POST(
request: Request
) {


try {


const body =
await request.json();





// Zod Validation

const validation =
loanSchema.safeParse(body);





if(!validation.success){


return NextResponse.json(

{

success:false,

message:"Invalid loan application data",


errors:

validation.error.issues.map(

(issue)=>(


{

field:
issue.path.join("."),


message:
issue.message


}


)

)


},

{

status:400

}

);


}







const data =
validation.data;







// Create Loan Application

const loanApplication =

await prisma.loanApplication.create({

data:{



applicationId:

"SL-" + Date.now(),





userId:

body.userId,





loanType:

data.loanType,





fullName:

data.fullName,





email:

data.email,





phone:

data.phone,





pan:

data.pan,





aadhaar:

data.aadhaar,







address:

body.address || null,





city:

body.city || null,





state:

body.state || null,







employmentType:

body.employmentType || null,





companyName:

body.companyName || null,







monthlyIncome:

Number(body.monthlyIncome) || 0,







loanAmount:

Number(data.loanAmount),





tenure:

Number(data.tenure),





interestRate:

Number(body.interestRate) || 0,







documents:

body.documents || {},






verified:

body.verified || false,







creditScore:

body.creditScore || null,





riskScore:

body.riskScore || null,







approvalStatus:

"PENDING",







adminRemark:

null,







signature:

body.signature || null,







status:

"SUBMITTED"



}


});









// Create initial timeline history

await prisma.loanStatusHistory.create({

data:{



applicationId:

loanApplication.id,




status:

"SUBMITTED",




remark:

"Loan application submitted"



}


});









// Send email notification

await sendEmail(

loanApplication.email,


"SmartLoan Application Received",



applicationSubmittedEmail(

loanApplication.fullName,


loanApplication.applicationId

)

);









return NextResponse.json(

{


success:true,


message:

"Loan application submitted successfully",



data:

loanApplication


},


{

status:201

}


);



}

catch(error){



console.error(

"Loan API Error:",

error

);




return NextResponse.json(

{


success:false,


message:

"Loan submission failed"


},


{

status:500

}


);


}



}









// GET ALL APPLICATIONS

export async function GET(){


try{


const applications =

await prisma.loanApplication.findMany({



include:{


history:true,


documents:true


},




orderBy:{


createdAt:"desc"


}



});







return NextResponse.json(

{


success:true,


data:applications


}

);



}

catch(error){



console.error(

"Fetch Loan Error:",

error

);





return NextResponse.json(

{


success:false,


message:

"Unable to fetch applications"


},


{

status:500

}


);



}



}