"use client";


interface Props {

status:string;

}



export default function ApplicationProgress({

status

}:Props){



const steps=[

"SUBMITTED",

"VERIFICATION",

"APPROVED"

];



const currentIndex =

status==="APPROVED"

?

2

:

status==="VERIFIED"

?

1

:

0;





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
mb-6
">

Application Progress

</h2>



<div className="
space-y-5
">


{

steps.map((step,index)=>(


<div

key={step}

className="
flex
items-center
gap-4
"

>


<div

className={`
w-8
h-8
rounded-full
flex
items-center
justify-center
font-bold
${
index<=currentIndex
?
"bg-blue-600 text-white"
:
"bg-gray-200 text-gray-500"
}
`}

>

{

index+1

}

</div>



<div>

<p className="
font-semibold
">

{step}

</p>


<p className="
text-sm
text-gray-500
">

{

index<=currentIndex

?

"Completed"

:

"Pending"

}

</p>


</div>



</div>


))

}



</div>


</div>


);


}