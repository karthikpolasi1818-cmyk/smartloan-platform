"use client";


import { useEffect, useState } from "react";



interface HistoryItem {


    id:string;

    status:string;

    remark?:string;

    createdAt:string;


}





export default function StatusTimeline(){



const [history,setHistory] =
useState<HistoryItem[]>([]);



const [loading,setLoading] =
useState(true);





async function fetchHistory(){


try{


const response =
await fetch(
"/api/customer/history"
);



const data =
await response.json();




if(data.success){

setHistory(
data.history
);

}


}

catch(error){

console.error(
"History fetch error",
error
);

}

finally{

setLoading(false);

}


}






useEffect(()=>{


fetchHistory();


},[]);







if(loading){


return (

<div>

Loading timeline...

</div>

);


}






return (

<div>


<h2 className="
text-2xl
font-bold
mb-6
">

Application Timeline

</h2>





{

history.length===0 ?


(

<p className="
text-gray-500
">

No status updates available.

</p>

)


:

(

<div className="
space-y-5
">


{

history.map((item,index)=>(


<div

key={item.id}

className="
flex
gap-4
items-start
"

>


<div className="
flex
flex-col
items-center
">


<div className="
w-4
h-4
rounded-full
bg-blue-600
">

</div>


{

index !== history.length-1 &&

<div className="
w-1
h-12
bg-blue-200
">

</div>

}


</div>





<div>


<h3 className="
font-semibold
text-lg
">

{item.status}

</h3>



<p className="
text-gray-600
">

{item.remark || "Status updated"}

</p>



<p className="
text-sm
text-gray-400
">

{
new Date(
item.createdAt
).toLocaleDateString()
}

</p>


</div>



</div>


))

}



</div>

)

}



</div>

);


}