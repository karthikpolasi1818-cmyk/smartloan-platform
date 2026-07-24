"use client";


import {
useEffect,
useState
} from "react";


import {

BarChart,

Bar,

XAxis,

YAxis,

Tooltip,

ResponsiveContainer

}

from "recharts";





export default function AnalyticsDashboard(){


const [data,setData]=
useState<any>(null);





useEffect(()=>{


fetch(
"/api/admin/analytics"
)

.then(res=>res.json())

.then(result=>{

setData(result.data);

});


},[]);






if(!data){


return(

<div className="loan-card">

Loading Analytics...

</div>

);


}






return(


<div className="space-y-8">





<div className="grid md:grid-cols-4 gap-5">



<div className="loan-card">

<h3>

Total Applications

</h3>

<p className="text-3xl font-bold">

{data.totalApplications}

</p>

</div>





<div className="loan-card">

<h3>

Approved

</h3>


<p className="text-3xl font-bold">

{data.approvedLoans}

</p>


</div>






<div className="loan-card">

<h3>

Rejected

</h3>


<p className="text-3xl font-bold">

{data.rejectedLoans}

</p>


</div>






<div className="loan-card">

<h3>

Approval Rate

</h3>


<p className="text-3xl font-bold">

{data.approvalRate}%

</p>


</div>





</div>








<div className="loan-card">


<h2 className="section-title">

Loan Type Distribution

</h2>



<ResponsiveContainer

width="100%"

height={300}

>


<BarChart

data={data.loanTypes}

>


<XAxis

dataKey="loanType"

/>


<YAxis />

<Tooltip />


<Bar

dataKey="_count.loanType"

/>


</BarChart>


</ResponsiveContainer>



</div>






<div className="loan-card">


<h2>

Total Loan Value

</h2>


<p className="text-4xl font-bold">


₹

{

data.totalLoanAmount.toLocaleString(
"en-IN"
)

}


</p>



</div>






</div>


);


}