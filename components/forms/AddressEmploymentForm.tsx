"use client";


import {
  useState
} from "react";


import {
  useForm
} from "react-hook-form";


import {
  zodResolver
} from "@hookform/resolvers/zod";



import {

  addressSchema,

  AddressData

}

from "@/schemas/addressSchema";



import {

  searchAddress

}

from "@/services/addressAutocomplete";



import {

  useApplicationStore

}

from "@/store/applicationStore";







export default function AddressEmploymentForm(){





const update =

useApplicationStore(

state=>state.update

);





const next =

useApplicationStore(

state=>state.nextStep

);








const {

register,

handleSubmit,

setValue,

formState:{
errors
}

}

=

useForm<AddressData>({


resolver:

zodResolver(addressSchema)


});








const [

suggestions,

setSuggestions

]

=

useState<any[]>([]);








async function addressSearch(

value:string

){



if(value.length > 3){



const result =

await searchAddress(value);



setSuggestions(result);



}



}









function submit(

data:AddressData

){





update({



address:

data.address,



city:

data.city,



state:

data.state,



employmentType:

data.employmentType,



companyName:

data.company || "",



income:

data.monthlyIncome || 0



});







next();



}









return(



<form

onSubmit={

handleSubmit(submit)

}


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

Address & Employment

</h2>









<input


className="input"


placeholder="Search Address"



onChange={(e)=>


addressSearch(

e.target.value

)


}


/>









{

suggestions.map(

(item)=>(



<button


type="button"



key={item.address}



className="

block

bg-blue-50

p-3

rounded-lg

w-full

text-left

"



onClick={()=>{



setValue(

"address",

item.address

);



setValue(

"city",

item.city

);



setValue(

"state",

item.state

);



}}



>


{item.address}



</button>



)

)



}









<input


className="input"


placeholder="Address"



{...register(
"address"
)}


/>





<p className="text-red-500">

{errors.address?.message}

</p>









<input


className="input"


placeholder="City"



{...register(
"city"
)}


/>





<p className="text-red-500">

{errors.city?.message}

</p>









<input


className="input"


placeholder="State"



{...register(
"state"
)}


/>









<select


className="input"



{...register(
"employmentType"
)}


>


<option value="">

Employment Type

</option>



<option value="SALARIED">

Salaried

</option>



<option value="SELF_EMPLOYED">

Self Employed

</option>



<option value="BUSINESS">

Business

</option>



</select>









<input


className="input"


placeholder="Company Name"



{...register(
"company"
)}


/>









<input


className="input"


type="number"


placeholder="Monthly Income"



{...register(

"monthlyIncome",

{

valueAsNumber:true

}

)}


/>








<p className="text-red-500">

{errors.monthlyIncome?.message}

</p>









<button


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