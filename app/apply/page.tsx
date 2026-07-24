"use client";


import {
  useApplicationStore
} from "@/store/applicationStore";



import LoanSelector from "@/components/loan/LoanSelector";

import LoanStepper from "@/components/loan/LoanStepper";


import PersonalLoanForm from "@/components/forms/PersonalLoanForm";

import AddressEmploymentForm from "@/components/forms/AddressEmploymentForm";

import DocumentUploadForm from "@/components/forms/DocumentUploadForm";

import LoanDetailsForm from "@/components/forms/LoanDetailsForm";


import LoanAgreement from "@/components/signature/LoanAgreement";

import SignatureCapture from "@/components/signature/SignatureCapture";


import SubmitApplication from "@/components/submit/SubmitApplication";




export default function ApplyPage(){



const step =
useApplicationStore(
(state)=>state.currentStep
);





return (


<main
className="
min-h-screen
bg-gradient-to-br
from-blue-50
via-white
to-indigo-100
py-10
px-5
"
>


<div
className="
max-w-6xl
mx-auto
"
>



<h1
className="
text-5xl
font-extrabold
text-blue-950
mb-3
"
>

SmartLoan Application

</h1>



<p
className="
text-lg
text-gray-600
mb-10
"
>

Production Grade Digital Loan Application System

</p>





<LoanSelector />



<LoanStepper />






{
step===1 &&

<PersonalLoanForm />

}





{
step===2 &&

<AddressEmploymentForm />

}





{
step===3 &&

<DocumentUploadForm />

}





{
step===4 &&

<LoanDetailsForm />

}





{
step===5 &&

<div className="loan-card">


<h2 className="section-title">

Verification

</h2>


<p>

Identity and document verification completed.

</p>


<button

className="primary-btn"

onClick={()=>{

useApplicationStore
.getState()
.nextStep();

}}

>

Continue

</button>


</div>

}





{
step===6 &&

<LoanAgreement />

}





{
step===7 &&

<SignatureCapture />

}





{
step===8 &&

<SubmitApplication />

}





</div>


</main>


);


}