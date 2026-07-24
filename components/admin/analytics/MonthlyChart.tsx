"use client";


interface Props{

data:any[];

}



export default function MonthlyChart({

data

}:Props){


const max =
Math.max(
...data.map(item=>item.count),
1
);



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

Monthly Applications

</h2>



<div className="
space-y-4
">


{
data.map(item=>(


<div key={item.month}>


<div className="
flex
justify-between
mb-1
">

<span>

{item.month}

</span>


<span>

{item.count}

</span>


</div>




<div className="
bg-gray-200
rounded-full
h-3
">


<div

className="
bg-blue-600
h-3
rounded-full
"

style={{

width:

`${

(item.count/max)*100

}%`

}}

>


</div>


</div>



</div>


))

}



</div>


</div>

);


}