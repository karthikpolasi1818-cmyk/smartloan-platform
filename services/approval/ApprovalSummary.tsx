"use client";


import {

useEffect,

useState

}

from "react";



import {

useApplicationStore

}

from "@/store/applicationStore";



import {

calculateApproval

}

from "@/services/approval/approvalEngine";



import {

generateLoanAgreementPDF

}

from "@/services/pdf/loanAgreementPDF";






export default function ApprovalSummary(){



const {


income,

amount,

verified,

loanType,

loanConfig,

setApproval


}=useApplicationStore();





const [

result,

setResult

]=useState<any>(null);





const [

applicationId

]=useState(

"SL-"+Date.now()

);








useEffect(()=>{



const data =

calculateApproval(

income,

amount,

verified

);




setResult(data);




setApproval(

data.creditScore,

data.status

);



},[]);







if(!result){


return(

<div className="loan-card">

<h2>

Generating Approval...

</h2>

</div>

);


}







function downloadSummary(){


generateLoanAgreementPDF({


loanType,

amount,

tenure:5,

income,

rate:loanConfig.rate


});


}









return(


<div className="loan-card">



<h2 className="section-title">

Loan Approval Summary

</h2>





<div className="summary-box">



<p>

Application ID:

<strong>

{applicationId}

</strong>

</p>





<p>

Loan Type:

<strong>

{loanType}

</strong>

</p>





<p>

Credit Score:

<strong>

{result.creditScore}

</strong>

</p>





<p>

Risk Score:

<strong>

{result.riskScore}

</strong>

</p>





<p>

Approval Probability:

<strong>

{result.approvalProbability}%

</strong>

</p>





<p>

Recommended Amount:

<strong>

₹

{result.recommendedAmount.toLocaleString("en-IN")}

</strong>

</p>




</div>








<div

className={

result.status==="APPROVED"

?

"success-box"

:

"error-box"

}

>


Final Status:

<strong>

{" "}

{result.status}

</strong>



</div>








<button

className="primary-btn"

onClick={downloadSummary}

>

Download Final Agreement

</button>





</div>


);


}