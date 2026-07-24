export function applicationSubmittedEmail(

name:string,

id:string

){


return `

<h2>
SmartLoan Application Received
</h2>


<p>
Hello ${name},
</p>


<p>
Your loan application has been submitted successfully.
</p>


<p>
Application ID:
<b>${id}</b>
</p>


<p>
Our team will review your application.
</p>

`;

}







export function loanApprovedEmail(

name:string,

remark:string

){


return `


<h2>
Loan Approved 🎉
</h2>


<p>
Hello ${name},
</p>


<p>
Your loan application has been approved.
</p>


<p>
Remark:
${remark}
</p>


`;

}







export function loanRejectedEmail(

name:string,

remark:string

){


return `


<h2>
Loan Application Update
</h2>


<p>
Hello ${name},
</p>


<p>
Unfortunately your loan application was rejected.
</p>


<p>
Reason:
${remark}
</p>


`;

}