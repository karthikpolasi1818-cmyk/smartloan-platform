"use client";


import { useEffect, useState } from "react";

import { motion } from "framer-motion";


import LogoutButton 
from "@/components/auth/LogoutButton";


import StatusActions 
from "@/components/admin/StatusActions";


import DocumentViewer 
from "@/components/admin/DocumentViewer";





export default function AdminPage(){



const [applications,setApplications] = 
useState<any[]>([]);


const [documents,setDocuments] = 
useState<any[]>([]);


const [loading,setLoading] = 
useState(true);






async function loadApplications(){


try{


const response = await fetch(

"/api/admin/applications"

);



const data = await response.json();




if(data.success){


setApplications(

data.applications || []

);


}



}

catch(error){


console.error(

"APPLICATION ERROR",

error

);


}


}








async function loadDocuments(){


try{


const response = await fetch(

"/api/admin/documents"

);



const data = await response.json();




if(data.success){


setDocuments(

data.documents || []

);


}



}

catch(error){


console.error(

"DOCUMENT ERROR",

error

);


}


}







async function refreshData(){


setLoading(true);



await Promise.all([

loadApplications(),

loadDocuments()

]);



setLoading(false);


}






useEffect(()=>{


refreshData();


},[]);









const total = applications.length;



const pending = applications.filter(

(app)=>

app.approvalStatus==="PENDING"

).length;




const approved = applications.filter(

(app)=>

app.approvalStatus==="APPROVED"

).length;




const rejected = applications.filter(

(app)=>

app.approvalStatus==="REJECTED"

).length;








return (

<main className="
min-h-screen
bg-gray-100
p-6
md:p-10
">


<div className="
max-w-7xl
mx-auto
">






{/* HEADER */}


<div className="
flex
justify-between
items-center
mb-8
">


<div>


<h1 className="
text-4xl
font-bold
">

Admin Dashboard

</h1>


<p className="
text-gray-500
mt-2
">

Manage loan applications and documents

</p>


</div>



<LogoutButton />


</div>








{/* ANALYTICS */}


<div className="
grid
md:grid-cols-4
gap-6
mb-8
">



{

[

{

title:"Total Applications",

value:total,

color:"text-blue-600"

},

{

title:"Pending",

value:pending,

color:"text-yellow-600"

},

{

title:"Approved",

value:approved,

color:"text-green-600"

},

{

title:"Rejected",

value:rejected,

color:"text-red-600"

}

].map((card,index)=>(


<motion.div

key={card.title}

initial={{

opacity:0,

y:20

}}

animate={{

opacity:1,

y:0

}}

transition={{

delay:index*0.1

}}

className="
bg-white
rounded-xl
shadow
p-6
"

>


<p className="
text-gray-500
">

{card.title}

</p>


<h2 className={`

text-3xl

font-bold

mt-2

${card.color}

`}>

{card.value}

</h2>


</motion.div>



))


}



</div>









{/* APPLICATIONS */}


<div className="
bg-white
rounded-xl
shadow
p-6
mb-8
">


<div className="
flex
justify-between
items-center
mb-5
">


<h2 className="
text-2xl
font-bold
">

Loan Applications

</h2>



<button

onClick={refreshData}

className="
bg-blue-600
text-white
px-4
py-2
rounded-lg
"

>

Refresh

</button>



</div>






{

loading

?

(

<p className="
text-center
py-10
">

Loading...

</p>

)


:


applications.length===0


?


(

<p className="
text-center
text-gray-500
py-10
">

No applications found

</p>

)



:


(

<div className="
space-y-5
">


{

applications.map((app)=>(


<motion.div


key={app.id}


initial={{

opacity:0

}}


animate={{

opacity:1

}}


className="
border
rounded-xl
p-5
"

>


<div className="
flex
flex-col
md:flex-row
justify-between
gap-5
">





<div>


<h3 className="
text-xl
font-bold
">

{app.fullName}

</h3>



<p className="
text-gray-500
">

{app.email}

</p>



<p className="mt-2">

Loan Type:

<b>

{app.loanType}

</b>

</p>




<p>

Amount:

<b>

₹{app.loanAmount?.toLocaleString()}

</b>

</p>



</div>







<div className="
space-y-3
">


<span className="
inline-block
bg-yellow-100
text-yellow-700
px-3
py-1
rounded-full
">

{app.approvalStatus}

</span>





<StatusActions

applicationId={app.id}

refresh={refreshData}

/>



</div>







</div>


</motion.div>



))


}


</div>


)


}



</div>









{/* DOCUMENTS */}



<DocumentViewer

documents={documents}

/>








</div>


</main>


);


}