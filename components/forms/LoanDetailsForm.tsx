"use client";


import {

useForm

}

from "react-hook-form";


import {

useApplicationStore

}

from "@/store/applicationStore";





interface LoanFormData {

loanType:string;

amount:number;

tenure:number;

}





const loanOptions = {


PERSONAL:{

rate:10.5,

maxAmount:500000

},


HOME:{

rate:8.5,

maxAmount:5000000

},


BUSINESS:{

rate:12,

maxAmount:2000000

}


};







export default function LoanDetailsForm(){



const {

setLoanType,

setAmount,

setTenure,

nextStep

}

=

useApplicationStore();





const {

register,

handleSubmit

}

=

useForm<LoanFormData>();







function submit(data:LoanFormData){



const config =

loanOptions[
data.loanType as keyof typeof loanOptions
];



setLoanType(

data.loanType,

config

);



setAmount(

Number(data.amount)

);



setTenure(

Number(data.tenure)

);



nextStep();



}






return(


<form

onSubmit={
handleSubmit(submit)
}

className="
bg-white
rounded-3xl
shadow-xl
p-10
space-y-6
"

>



<h2 className="
text-3xl
font-bold
text-blue-900
">

Loan Details

</h2>





<select

className="input"

{...register(
"loanType",
{
required:true
}
)}

>


<option value="">

Select Loan Type

</option>


<option value="PERSONAL">

Personal Loan

</option>


<option value="HOME">

Home Loan

</option>


<option value="BUSINESS">

Business Loan

</option>


</select>








<input

className="input"

type="number"

placeholder="Loan Amount"

{...register(
"amount",
{
valueAsNumber:true
}
)}

/>







<input

className="input"

type="number"

placeholder="Tenure (Years)"

{...register(
"tenure",
{
valueAsNumber:true
}
)}

/>







<button

className="
bg-blue-600
text-white
px-10
py-4
rounded-xl
font-bold
"

>

Continue

</button>



</form>


)

}