"use client";


interface Props {

user:any;

}



export default function ProfileCard({

user

}:Props){


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
mb-4
">

Customer Profile

</h2>



<div className="space-y-3">


<div>

<p className="
text-sm
text-gray-500
">

Name

</p>


<p className="
font-semibold
">

{user?.name || "Customer"}

</p>

</div>





<div>

<p className="
text-sm
text-gray-500
">

Email

</p>


<p className="
font-semibold
">

{user?.email}

</p>

</div>





<div>

<p className="
text-sm
text-gray-500
">

Role

</p>


<p className="
font-semibold
uppercase
">

{user?.role}

</p>

</div>



</div>


</div>

);


}