"use client";


import {

useApplicationStore

}

from "@/store/applicationStore";


import PersonalLoanForm

from "@/components/forms/PersonalLoanForm";


import AddressEmploymentForm

from "@/components/forms/AddressEmploymentForm";


import LoanDetailsForm

from "@/components/forms/LoanDetailsForm";


import DocumentUpload

from "@/components/documents/DocumentUpload";





export default function ApplyPage(){



const {

currentStep,

applicationId

}=useApplicationStore();





return (

<main

className="
min-h-screen
bg-gradient-to-br
from-blue-50
to-indigo-100
py-10
"

>


<div

className="
max-w-5xl
mx-auto
px-5
"

>



<h1

className="
text-4xl
font-bold
text-center
text-blue-900
"

>

SmartLoan Application

</h1>




<p

className="
text-center
text-gray-600
mt-3
"

>

Complete your loan application step by step

</p>







{/* Progress */}

<div

className="
flex
justify-center
gap-4
mt-10
"

>


{

[1,2,3,4].map(

(step)=>(


<div

key={step}

className={`

w-12

h-12

rounded-full

flex

items-center

justify-center

font-bold

${

currentStep >= step

?

"bg-blue-600 text-white"

:

"bg-gray-200 text-gray-600"

}

`}

>

{step}

</div>


)

)

}



</div>







<div

className="
mt-10
"

>



{

currentStep===1 &&

<LoanDetailsForm/>

}





{

currentStep===2 &&

<PersonalLoanForm/>

}





{

currentStep===3 &&

<AddressEmploymentForm/>

}





{

currentStep===4 &&


<DocumentUpload

applicationId={

applicationId ||

""

}

/>


}





</div>





</div>


</main>


);

}