"use client";


interface Props {

application:any;

}



export default function LoanStatusCard({

application

}:Props){


const status =
application?.approvalStatus || "PENDING";



const statusColor =

status==="APPROVED"

?

"bg-green-100 text-green-700"

:

status==="REJECTED"

?

"bg-red-100 text-red-700"

:

"bg-yellow-100 text-yellow-700";





return (

<div className="
bg-white
rounded-xl
shadow
p-6
">


<h2 className="
text-xl
font-bold
mb-4
">

Loan Status

</h2>



<div className="space-y-3">


<div>

<p className="
text-sm
text-gray-500
">

Application ID

</p>


<p className="
font-semibold
">

{
application?.applicationId ||
"N/A"
}

</p>


</div>





<div>

<p className="
text-sm
text-gray-500
">

Loan Amount

</p>


<p className="
font-semibold
">

₹ {

application?.loanAmount?.toLocaleString()

||

0

}

</p>


</div>





<div>


<p className="
text-sm
text-gray-500
">

Current Status

</p>



<span

className={`
inline-block
mt-2
px-4
py-2
rounded-full
font-semibold
${statusColor}
`}

>

{status}

</span>


</div>



</div>


</div>


);


}