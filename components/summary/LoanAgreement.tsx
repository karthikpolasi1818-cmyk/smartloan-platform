"use client";


import {

useApplicationStore

}

from "@/store/applicationStore";





export default function LoanAgreement(){



const {

loanType,

amount,

tenure,

income,

signature


}

=

useApplicationStore();








return(



<div className="loan-card">



<h2>

Loan Agreement Preview

</h2>







<p>

Loan Type:

<strong>

{loanType}

</strong>

</p>







<p>

Loan Amount:

<strong>

₹

{

amount.toLocaleString(

"en-IN"

)

}

</strong>

</p>







<p>

Tenure:

<strong>

{tenure} Years

</strong>

</p>








<p>

Monthly Income:

<strong>

₹

{

income.toLocaleString(

"en-IN"

)

}

</strong>

</p>









<h3>

Borrower Signature

</h3>








{

signature &&


<img


src={signature}



alt="Borrower Signature"



style={{

width:"300px",

border:"1px solid #ddd"

}}



/>


}






</div>


);



}