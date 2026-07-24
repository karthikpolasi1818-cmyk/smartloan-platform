"use client";


interface Props{

data:any;

}



export default function LoanStatusChart({
data
}:Props){


return (

<div className="
bg-white
rounded-xl
shadow
p-6
mt-8
">


<h2 className="
text-xl
font-bold
mb-5
">

Loan Status Overview

</h2>




<div className="space-y-4">


<div>

<p>
Approved
</p>


<div className="
bg-green-200
rounded-full
h-4
">

<div

className="
bg-green-600
h-4
rounded-full
"

style={{

width:
`${data.approvedPercentage || 0}%`

}}

>

</div>


</div>


</div>





<div>

<p>
Pending
</p>


<div className="
bg-yellow-200
rounded-full
h-4
">

<div

className="
bg-yellow-500
h-4
rounded-full
"

style={{

width:
`${data.pendingPercentage || 0}%`

}}

>

</div>


</div>


</div>





<div>

<p>
Rejected
</p>


<div className="
bg-red-200
rounded-full
h-4
">

<div

className="
bg-red-600
h-4
rounded-full
"

style={{

width:
`${data.rejectedPercentage || 0}%`

}}

>

</div>


</div>


</div>



</div>


</div>

);


}