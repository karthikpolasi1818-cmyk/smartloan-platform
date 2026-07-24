"use client";

import { useState } from "react";

import toast from "react-hot-toast";

import FormButton from "@/components/common/FormButton";



export default function LoanDetailsForm() {


const [loading,setLoading] = useState(false);



const [formData,setFormData] = useState({

loanType:"",

fullName:"",

email:"",

phone:"",

pan:"",

aadhaar:"",

address:"",

city:"",

state:"",

employmentType:"",

companyName:"",

monthlyIncome:"",

loanAmount:"",

tenure:"",

interestRate:""


});





function handleChange(

e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>

){


setFormData({

...formData,

[e.target.name]:e.target.value

});


}





async function handleSubmit(

e:React.FormEvent

){


e.preventDefault();



setLoading(true);



try{


const response = await fetch(

"/api/customer/application",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

...formData,

loanAmount:Number(formData.loanAmount),

tenure:Number(formData.tenure),

interestRate:Number(formData.interestRate),

monthlyIncome:

formData.monthlyIncome

?

Number(formData.monthlyIncome)

:

undefined

})

}

);



const result =
await response.json();




if(result.success){


toast.success(

"Loan application submitted successfully"

);



setFormData({

loanType:"",

fullName:"",

email:"",

phone:"",

pan:"",

aadhaar:"",

address:"",

city:"",

state:"",

employmentType:"",

companyName:"",

monthlyIncome:"",

loanAmount:"",

tenure:"",

interestRate:""

});


}

else{


toast.error(

result.message ||

"Application submission failed"

);


}



}

catch(error){


console.error(error);



toast.error(

"Something went wrong"

);


}

finally{


setLoading(false);


}



}





return (

<form

onSubmit={handleSubmit}

className="
bg-white
rounded-xl
shadow-lg
p-6
space-y-5
"

>


<h2 className="
text-2xl
font-bold
">

Loan Application

</h2>





<select

name="loanType"

value={formData.loanType}

onChange={handleChange}

className="
w-full
border
rounded-lg
p-3
"

required

>

<option value="">

Select Loan Type

</option>

<option value="Personal Loan">

Personal Loan

</option>

<option value="Home Loan">

Home Loan

</option>

<option value="Business Loan">

Business Loan

</option>


</select>





<input

name="fullName"

placeholder="Full Name"

value={formData.fullName}

onChange={handleChange}

className="input"

required

/>





<input

name="email"

placeholder="Email"

type="email"

value={formData.email}

onChange={handleChange}

className="input"

required

/>





<input

name="phone"

placeholder="Phone Number"

value={formData.phone}

onChange={handleChange}

className="input"

required

/>





<input

name="pan"

placeholder="PAN Number"

value={formData.pan}

onChange={handleChange}

className="input"

required

/>





<input

name="aadhaar"

placeholder="Aadhaar Number"

value={formData.aadhaar}

onChange={handleChange}

className="input"

required

/>





<input

name="loanAmount"

placeholder="Loan Amount"

type="number"

value={formData.loanAmount}

onChange={handleChange}

className="input"

required

/>





<input

name="tenure"

placeholder="Tenure (Months)"

type="number"

value={formData.tenure}

onChange={handleChange}

className="input"

required

/>





<input

name="interestRate"

placeholder="Interest Rate"

type="number"

value={formData.interestRate}

onChange={handleChange}

className="input"

required

/>





<input

name="employmentType"

placeholder="Employment Type"

value={formData.employmentType}

onChange={handleChange}

className="input"

/>





<input

name="companyName"

placeholder="Company Name"

value={formData.companyName}

onChange={handleChange}

className="input"

/>





<input

name="monthlyIncome"

placeholder="Monthly Income"

type="number"

value={formData.monthlyIncome}

onChange={handleChange}

className="input"

/>





<textarea

name="address"

placeholder="Address"

value={formData.address}

onChange={(e)=>setFormData({

...formData,

address:e.target.value

})}

className="
w-full
border
rounded-lg
p-3
"

/>





<FormButton loading={loading}>

Submit Application

</FormButton>



</form>

);


}