"use client";


import { useEffect,useState } from "react";

import { useRouter } from "next/navigation";


import ProfileCard 
from "@/components/customer/ProfileCard";


import LoanStatusCard 
from "@/components/customer/LoanStatusCard";


import ApplicationProgress 
from "@/components/customer/ApplicationProgress";


import LogoutButton 
from "@/components/auth/LogoutButton";



import { motion } from "framer-motion";




export default function DashboardPage(){



const [user,setUser]=useState<any>(null);

const [application,setApplication]=useState<any>(null);

const [loading,setLoading]=useState(true);



const router=useRouter();





async function loadDashboard(){


try{


const userResponse =
await fetch("/api/auth/me");


const userData =
await userResponse.json();




if(!userData.success){

router.push("/login");

return;

}




setUser(userData.user);





const applicationResponse =

await fetch(
"/api/customer/current"
);



const applicationData =

await applicationResponse.json();




if(applicationData.success){

setApplication(
applicationData.application
);

}



}

catch(error){

console.error(error);

}

finally{

setLoading(false);

}


}






useEffect(()=>{


loadDashboard();


},[]);







if(loading){


return (

<div className="
min-h-screen
flex
items-center
justify-center
">

Loading Dashboard...

</div>

);


}






return (

<main className="
min-h-screen
bg-gray-100
p-6
md:p-10
">


<div className="
max-w-6xl
mx-auto
">


<div className="
flex
justify-between
items-center
mb-8
">


<h1 className="
text-4xl
font-bold
">

SmartLoan Dashboard

</h1>



<LogoutButton />


</div>







<motion.div

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.5
}}

className="
grid
md:grid-cols-2
gap-6
"

>


<ProfileCard

user={user}

/>


<LoanStatusCard

application={application}

/>


</motion.div>







<div className="mt-8">


<ApplicationProgress

status={
application?.approvalStatus || "PENDING"
}

/>


</div>






</div>


</main>

);


}