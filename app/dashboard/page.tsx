"use client";


import {
useEffect,
useState
} from "react";


import {
useRouter
} from "next/navigation";




export default function Dashboard(){


const router = useRouter();


const [application,setApplication] =
useState<any>(null);



const [loading,setLoading] =
useState(true);





useEffect(()=>{


const email =
document.cookie
.split("; ")
.find(
(row)=>row.startsWith("email=")
)
?.split("=")[1];




if(!email){

router.push("/login");

return;

}





fetch(

"/api/customer/application",

{

headers:{

email:email

}

}

)

.then(res=>res.json())

.then(data=>{


setApplication(
data.data
);


setLoading(false);


});



},[]);








function logout(){


document.cookie =
"token=; path=/; max-age=0";


document.cookie =
"role=; path=/; max-age=0";


document.cookie =
"email=; path=/; max-age=0";



router.push("/login");


}







if(loading){


return(

<div className="loan-card">

Loading Dashboard...

</div>

);


}






return(


<main

className="

min-h-screen

bg-gradient-to-br

from-blue-50

via-white

to-indigo-100

p-10

"

>


<div className="max-w-5xl mx-auto">



<div className="flex justify-between mb-8">


<h1 className="text-4xl font-bold text-blue-900">

SmartLoan Customer Dashboard

</h1>



<button

className="primary-btn"

onClick={logout}

>

Logout

</button>


</div>





{

!application ?



<div className="loan-card">


<h2 className="section-title">

No Application Found

</h2>


<p>

You have not submitted any loan application.

</p>


<button

className="primary-btn"

onClick={()=>router.push("/apply")}

>

Apply Loan

</button>



</div>





:



<div className="loan-card">


<h2 className="section-title">

Loan Application Tracking

</h2>






<div className="space-y-4">



<p>

Application ID:

<strong>

{" "}

{application.applicationId}

</strong>

</p>





<p>

Loan Type:

<strong>

{" "}

{application.loanType}

</strong>

</p>





<p>

Loan Amount:

<strong>

{" "}

₹{application.loanAmount.toLocaleString("en-IN")}

</strong>

</p>





<p>

Current Status:

<strong>

{" "}

{application.status}

</strong>

</p>



</div>







<hr className="my-6"/>





<h3 className="text-xl font-bold">

Application Timeline

</h3>





<div className="mt-5 space-y-4">



<div>

✅ Application Submitted

</div>




<div>

{

application.verified

?

"✅ Identity Verification Completed"

:

"⏳ Verification Pending"

}

</div>






<div>

{

application.approvalStatus==="APPROVED"

?

"✅ Loan Approved"

:

"⏳ Awaiting Approval"

}

</div>






</div>








{

application.creditScore &&


<div className="success-box mt-6">


Credit Score:

{" "}

<b>

{application.creditScore}

</b>


</div>


}







{

application.adminRemark &&


<div className="loan-card mt-5">


<h3>

Admin Remark

</h3>


<p>

{application.adminRemark}

</p>


</div>


}




</div>


}





</div>


</main>


);


}