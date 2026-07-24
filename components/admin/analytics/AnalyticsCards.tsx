"use client";


interface Props {

data:any;

}



export default function AnalyticsCards({
data
}:Props){


const cards=[


{
title:"Total Applications",
value:data.totalApplications
},


{
title:"Approved Loans",
value:data.approvedLoans
},


{
title:"Rejected Loans",
value:data.rejectedLoans
},


{
title:"Pending Loans",
value:data.pendingLoans
},


{
title:"Total Loan Amount",
value:
`₹ ${data.totalLoanAmount?.toLocaleString()}`
}


];



return (

<div className="
grid
grid-cols-1
md:grid-cols-5
gap-5
">


{
cards.map((card)=>(


<div

key={card.title}

className="
bg-white
rounded-xl
shadow
p-5
"

>


<h3 className="
text-gray-500
text-sm
">

{card.title}

</h3>


<p className="
text-2xl
font-bold
mt-2
">

{card.value}

</p>


</div>


))

}



</div>

);


}