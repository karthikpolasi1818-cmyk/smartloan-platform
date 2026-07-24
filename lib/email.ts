import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({

    host: process.env.SMTP_HOST,

    port: Number(
        process.env.SMTP_PORT
    ),

    secure:false,


    auth:{

        user:process.env.SMTP_EMAIL,

        pass:process.env.SMTP_PASSWORD

    }


});





export async function sendLoanStatusEmail(

    email:string,

    name:string,

    status:string,

    applicationId:string

){


try{


await transporter.sendMail({


from:

`"SmartLoan Platform" <${process.env.SMTP_EMAIL}>`,



to:email,



subject:

`Loan Application ${status}`,



html:


`

<div style="font-family:Arial">


<h2>
SmartLoan Application Update
</h2>


<p>
Hello ${name},
</p>


<p>

Your loan application status has been updated.

</p>



<h3>

Status:
${status}

</h3>



<p>

Application ID:

<b>${applicationId}</b>

</p>



<p>

Thank you for choosing SmartLoan.

</p>



</div>

`



});



console.log(
"Email sent successfully"
);



}

catch(error){


console.error(
"Email sending failed:",
error
);


}



}