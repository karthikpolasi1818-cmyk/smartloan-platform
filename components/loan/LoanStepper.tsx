"use client";


import {
  useApplicationStore
} from "@/store/applicationStore";





export default function LoanStepper(){



const currentStep =

useApplicationStore(

(state)=>state.currentStep

);





const steps=[


"Loan Selection",

"Personal Details",

"Address & Employment",

"Documents",

"Loan Details",

"Verification",

"Agreement",

"E-Signature"

];







return(


<div className="loan-card">



<h2 className="section-title">

Application Progress

</h2>





<div className="grid grid-cols-2 md:grid-cols-4 gap-5">



{

steps.map((step,index)=>(


<div


key={step}



className={

currentStep===index

?


`

p-5

rounded-xl

bg-gradient-to-r

from-blue-600

to-indigo-600

text-white

font-bold

text-center

shadow-lg

`



:



`

p-5

rounded-xl

bg-blue-50

text-blue-900

font-semibold

text-center

`

}





>


<div className="text-xl">

{index+1}

</div>



<p>

{step}

</p>



</div>



))


}



</div>





</div>


);


}