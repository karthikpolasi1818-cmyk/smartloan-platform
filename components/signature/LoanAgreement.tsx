"use client";


import {

useApplicationStore

}

from "@/store/applicationStore";



import {

generateLoanAgreementPDF

}

from "@/services/pdf/loanAgreementPDF";







export default function LoanAgreement(){



const {


loanType,

loanConfig,

amount,

tenure,

income,

nextStep


}=useApplicationStore();






const emi =

amount && tenure && loanConfig.rate

?


Math.round(

(

amount *

(loanConfig.rate/12/100)

*

Math.pow(
1+(loanConfig.rate/12/100),
tenure*12
)

)

/

(

Math.pow(
1+(loanConfig.rate/12/100),
tenure*12
)-1

)

)

:

0;









function downloadPDF(){



generateLoanAgreementPDF({


loanType,

amount,

tenure,

income,

rate:loanConfig.rate


});



}







return(


<div className="loan-card">



<h2 className="section-title">

Loan Agreement Preview

</h2>







<div className="summary-box">


<p>

Loan Type:

<strong>

{loanType}

</strong>

</p>





<p>

Loan Amount:

<strong>

₹{amount.toLocaleString("en-IN")}

</strong>

</p>






<p>

Interest Rate:

<strong>

{loanConfig.rate}%

</strong>

</p>






<p>

Tenure:

<strong>

{tenure} Years

</strong>

</p>






<p>

Monthly EMI:

<strong>

₹{emi.toLocaleString("en-IN")}

</strong>

</p>





</div>









<div className="summary-box">


<h3>

Terms & Conditions

</h3>


<p>

✓ Information provided is accurate

</p>


<p>

✓ Applicant agrees to repayment terms

</p>


<p>

✓ Verification is mandatory before approval

</p>



</div>









<button

className="primary-btn"

onClick={downloadPDF}

>

Download Agreement PDF

</button>







<button

className="primary-btn"

onClick={nextStep}

>

Proceed To E-Signature

</button>





</div>


);


}