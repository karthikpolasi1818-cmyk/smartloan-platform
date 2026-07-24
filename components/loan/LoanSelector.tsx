"use client";


import {
  useApplicationStore
} from "@/store/applicationStore";



type LoanType =
  | "PERSONAL"
  | "HOME"
  | "BUSINESS";



interface LoanConfig {

  rate:number;

  minAmount:number;

  maxAmount:number;

  maxTenure:number;

}






export default function LoanSelector(){



const setLoanType =

useApplicationStore(

(state)=>state.setLoanType

);



const nextStep =

useApplicationStore(

(state)=>state.nextStep

);







const loans:

{

type:LoanType;

label:string;

description:string;

config:LoanConfig;


}[]=[




{


type:"PERSONAL",


label:"Personal Loan",


description:
"Education, medical, travel and personal expenses",



config:{


rate:10.5,

minAmount:50000,

maxAmount:5000000,

maxTenure:7


}


},







{


type:"HOME",


label:"Home Loan",


description:
"Purchase or construction of residential property",



config:{


rate:8.5,

minAmount:500000,

maxAmount:50000000,

maxTenure:30


}


},







{


type:"BUSINESS",


label:"Business Loan",


description:
"Business expansion and working capital",



config:{


rate:12,

minAmount:100000,

maxAmount:20000000,

maxTenure:10


}


}



];









function selectLoan(

type:LoanType,

config:LoanConfig

){



setLoanType(

type,

config

);



nextStep();



}








return(


<div className="loan-card">



<h2 className="section-title">

Select Loan Type

</h2>




<p className="subtitle">

Choose the loan category to continue

</p>







<div className="grid grid-cols-1 md:grid-cols-3 gap-6">





{

loans.map((loan)=>(


<button


key={loan.type}



onClick={()=>


selectLoan(

loan.type,

loan.config

)

}




className="

loan-type-btn

rounded-2xl

p-7

text-left

"




>



<h3>

{loan.label}

</h3>



<p className="mt-3">

{loan.description}

</p>




<div className="mt-4 text-sm">


Interest Rate:

{loan.config.rate}%


</div>



<div className="text-sm">


Maximum Tenure:

{loan.config.maxTenure} Years


</div>




</button>



))


}



</div>






</div>


);


}