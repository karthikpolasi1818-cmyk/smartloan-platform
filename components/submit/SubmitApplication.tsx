"use client";


import {
  useState
} from "react";


import {
  useApplicationStore
} from "@/store/applicationStore";



export default function SubmitApplication(){


const {

loanType,

fullName,

email,

phone,

pan,

aadhaar,

address,

city,

state,

employmentType,

companyName,

income,

amount,

tenure,

interestRate,

documents,

verified,

creditScore,

riskScore,

approvalStatus,

signature,

resetApplication


}=useApplicationStore();



const [loading,setLoading]=useState(false);

const [message,setMessage]=useState("");





async function submitLoan(){


try{


setLoading(true);



const response = await fetch(
"/api/loan",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},


body:JSON.stringify({

loanType,

fullName,

email,

phone,

pan,

aadhaar,

address,

city,

state,

employmentType,

companyName,

monthlyIncome:income,

loanAmount:amount,

tenure,

interestRate,

documents,

verified,

creditScore,

riskScore,

approvalStatus,

signature


})

}

);



const data =
await response.json();



if(data.success){


setMessage(
"Loan Application Submitted Successfully"
);


resetApplication();


}

else{


setMessage(
"Submission Failed"
);


}



}

catch(error){


console.log(error);


setMessage(
"Server Error"
);


}

finally{


setLoading(false);


}


}





return(

<div className="loan-card">


<h2 className="section-title">

Submit Application

</h2>



<p>

Review all details before final submission.

</p>



<button

className="primary-btn"

onClick={submitLoan}

disabled={loading}

>


{
loading
?
"Submitting..."
:
"Submit Loan Application"
}



</button>



{

message &&

<div className="success-box">

{message}

</div>

}



</div>


);


}