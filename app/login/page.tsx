"use client";


import {
  useState
} from "react";


import {
  useRouter
} from "next/navigation";





export default function LoginPage(){


const router = useRouter();



const [email,setEmail] =
useState("");



const [password,setPassword] =
useState("");



const [message,setMessage] =
useState("");



const [loading,setLoading] =
useState(false);






async function login(){


try{


setLoading(true);

setMessage("");



const response = await fetch(

"/api/auth/login",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

email,

password

})


}

);



const data =
await response.json();





if(!response.ok){


setMessage(

data.message ||
"Login failed"

);


return;

}





if(data.success){



// Store JWT in cookie
document.cookie =

`token=${data.token}; path=/; max-age=86400`;





// Store role

document.cookie =

`role=${data.role}; path=/; max-age=86400`;






if(data.role==="ADMIN"){



router.push("/admin");



}

else{



router.push("/apply");



}




}



}

catch(error){



console.log(error);



setMessage(

"Server error. Please try again."

);



}

finally{


setLoading(false);


}



}









return(


<main

className="

min-h-screen

flex

items-center

justify-center

bg-gradient-to-br

from-blue-50

via-white

to-indigo-100

px-5

"

>


<div

className="

loan-card

w-full

max-w-md

"

>



<h1

className="

text-4xl

font-extrabold

text-blue-900

mb-3

"

>

SmartLoan Login

</h1>




<p

className="subtitle"

>

Login to access your loan portal

</p>







<div className="form-group">


<label>

Email

</label>



<input

className="loan-input"

type="email"

placeholder="Enter email"

value={email}

onChange={(e)=>

setEmail(e.target.value)

}

/>



</div>








<div className="form-group">


<label>

Password

</label>



<input

className="loan-input"

type="password"

placeholder="Enter password"

value={password}

onChange={(e)=>

setPassword(e.target.value)

}

/>



</div>







<button


className="primary-btn w-full"


onClick={login}


disabled={loading}



>


{

loading

?

"Logging in..."

:

"Login"

}



</button>







{

message &&


<div

className="error-box mt-4"

>

{message}

</div>


}







<p

className="mt-5 text-center"

>

Don't have an account?


<a

href="/register"

className="text-blue-700 font-bold ml-2"

>

Register

</a>



</p>







</div>


</main>


);


}