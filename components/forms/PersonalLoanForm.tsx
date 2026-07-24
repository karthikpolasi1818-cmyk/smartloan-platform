"use client";


import {
  useForm
} from "react-hook-form";


import {
  zodResolver
} from "@hookform/resolvers/zod";



import {

personalSchema,

PersonalData

}

from "@/schemas/personalSchema";



import {

useApplicationStore

}

from "@/store/applicationStore";






export default function PersonalLoanForm(){



const update =

useApplicationStore(

state=>state.update

);





const nextStep =

useApplicationStore(

state=>state.nextStep

);








const {

register,

handleSubmit,

formState:{
errors
}

}

=

useForm<PersonalData>({

resolver:

zodResolver(personalSchema)

});









function submit(

data:PersonalData

){



update({



fullName:

data.fullName,



email:

data.email,



phone:

data.phone



});




nextStep();



}









return(



<form

onSubmit={handleSubmit(submit)}

className="

bg-white

rounded-3xl

shadow-xl

p-10

space-y-6

mt-10

"

>





<h2

className="

text-3xl

font-bold

text-blue-900

"

>

Personal Information

</h2>








<div>


<label>

Full Name

</label>



<input


className="input"


placeholder="Enter full name"



{...register(

"fullName"

)}


/>



<p className="text-red-500">

{errors.fullName?.message}

</p>


</div>









<div>


<label>

Email Address

</label>



<input


className="input"


type="email"


placeholder="Enter email"



{...register(

"email"

)}


/>



<p className="text-red-500">

{errors.email?.message}

</p>


</div>









<div>


<label>

Phone Number

</label>



<input


className="input"


placeholder="Enter phone number"



{...register(

"phone"

)}


/>



<p className="text-red-500">

{errors.phone?.message}

</p>


</div>









<button

type="submit"


className="

bg-gradient-to-r

from-blue-600

to-indigo-600

text-white

font-bold

px-10

py-4

rounded-xl

"

>


Save & Continue


</button>






</form>


);



}