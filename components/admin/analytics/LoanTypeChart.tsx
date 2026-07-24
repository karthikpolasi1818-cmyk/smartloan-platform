"use client";


interface Props{

data:any[];

}



export default function LoanTypeChart({

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
mb-6
">

Loan Type Distribution

</h2>



<div className="
space-y-4
">


{

data.map((item)=>(


<div

key={item.loanType}

className="
flex
justify-between
border-b
pb-2
"

>


<span>

{item.loanType}

</span>


<span className="font-bold">

{
item._count.loanType
}

</span>


</div>


))

}



</div>


</div>

);


}