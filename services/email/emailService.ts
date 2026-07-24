import nodemailer from "nodemailer";



const transporter =
nodemailer.createTransport({

host: process.env.SMTP_HOST,

port:Number(
process.env.SMTP_PORT
),

secure:false,


auth:{


user:
process.env.SMTP_EMAIL,


pass:
process.env.SMTP_PASSWORD


}


});





export async function sendEmail(

to:string,

subject:string,

html:string

){


try{


await transporter.sendMail({

from:
process.env.SMTP_EMAIL,


to,


subject,


html


});



console.log(
"Email sent successfully"
);



}

catch(error){


console.log(
"Email error:",
error
);


}



}