"use client";


import {
  useEffect,
  useState
} from "react";


import {
  useRouter
} from "next/navigation";


import AnalyticsDashboard from "@/components/analytics/AnalyticsDashboard";





export default function AdminPage(){



const router = useRouter();



const [

applications,

setApplications

] = useState<any[]>([]);



const [

loading,

setLoading

] = useState(true);







async function loadApplications(){


try{


setLoading(true);



const response =

await fetch(

"/api/admin"

);



const data =

await response.json();



setApplications(

data.data || []

);



}

catch(error){


console.log(
error
);


}

finally{


setLoading(false);


}


}







useEffect(()=>{


loadApplications();


},[]);








async function updateStatus(

id:string,

status:string

){



const remark =

window.prompt(

"Enter admin remark"

);




if(!remark){

return;

}




await fetch(

"/api/admin/status",

{


method:"PUT",


headers:{

"Content-Type":

"application/json"

},


body:JSON.stringify({

id,

status,

remark

})


}

);




loadApplications();


}








function logout(){



document.cookie =

"token=; path=/; max-age=0";



document.cookie =

"role=; path=/; max-age=0";



router.push("/login");


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



<div

className="max-w-7xl mx-auto"

>





<div className="flex justify-between items-center mb-8">



<h1

className="

text-4xl

font-extrabold

text-blue-900

"

>

SmartLoan Admin Dashboard

</h1>




<button

className="primary-btn"

onClick={logout}

>

Logout

</button>



</div>








{/* Analytics Section */}



<AnalyticsDashboard />









{/* Loan Applications */}



<div

className="loan-card mt-10 overflow-x-auto"

>


<h2

className="section-title"

>

Loan Applications

</h2>







{

loading ?


<p>

Loading applications...

</p>



:



applications.length===0 ?


<p>

No applications found.

</p>



:



<table

className="w-full border-collapse"

>



<thead>


<tr

className="border-b"

>


<th className="p-3 text-left">

Applicant

</th>



<th className="p-3 text-left">

Loan Type

</th>



<th className="p-3 text-left">

Amount

</th>



<th className="p-3 text-left">

Credit Score

</th>



<th className="p-3 text-left">

Status

</th>



<th className="p-3 text-left">

Actions

</th>


</tr>


</thead>








<tbody>



{

applications.map(

(loan)=>(


<tr

key={loan.id}

className="border-b"

>



<td className="p-3">


<p className="font-bold">

{loan.fullName}

</p>


<p className="text-sm text-gray-500">

{loan.email}

</p>


</td>







<td className="p-3">

{loan.loanType}

</td>







<td className="p-3">

₹

{

loan.loanAmount?.toLocaleString(

"en-IN"

)

}

</td>







<td className="p-3">

{

loan.creditScore || "-"

}

</td>







<td className="p-3">


<span

className={

loan.status==="APPROVED"

?

"success-box"

:

loan.status==="REJECTED"

?

"error-box"

:

""

}

>


{loan.status}


</span>


</td>








<td className="p-3 space-x-2">





<button

className="primary-btn"

disabled={

loan.status==="APPROVED"

}

onClick={()=>


updateStatus(

loan.id,

"APPROVED"

)


}

>

Approve

</button>







<button

className="primary-btn"

disabled={

loan.status==="REJECTED"

}

onClick={()=>


updateStatus(

loan.id,

"REJECTED"

)


}

>

Reject

</button>





</td>






</tr>


)

)


}



</tbody>





</table>



}





</div>







</div>



</main>


);


}