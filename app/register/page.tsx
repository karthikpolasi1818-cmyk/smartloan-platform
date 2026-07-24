"use client";


import {
useState
} from "react";

import {
useRouter
} from "next/navigation";



export default function RegisterPage(){


const router = useRouter();


const [form,setForm]=useState({

name:"",

email:"",

password:""

});


const [message,setMessage]=useState("");





function update(
e:any
){

setForm({

...form,

[e.target.name]:
e.target.value

});

}





async function register(){


const res =
await fetch(
"/api/auth/register",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:
JSON.stringify(form)

}

);



const data =
await res.json();



if(data.success){


setMessage(
"Registration successful"
);


router.push("/login");


}

else{


setMessage(
data.message
);


}


}




return(

<main className="min-h-screen flex items-center justify-center bg-gray-100">


<div className="loan-card w-full max-w-md">


<h1 className="section-title">

Create Account

</h1>



<input

className="loan-input"

name="name"

placeholder="Full Name"

onChange={update}

/>



<input

className="loan-input"

name="email"

placeholder="Email"

onChange={update}

/>



<input

className="loan-input"

type="password"

name="password"

placeholder="Password"

onChange={update}

/>




<button

className="primary-btn"

onClick={register}

>

Register

</button>



<p>

{message}

</p>



</div>


</main>

);

}