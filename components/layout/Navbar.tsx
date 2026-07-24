"use client";

import Link from "next/link";

import LogoutButton from "@/components/auth/LogoutButton";


export default function Navbar(){


return (

<nav className="
bg-white
shadow
px-6
py-4
">


<div className="
max-w-7xl
mx-auto
flex
justify-between
items-center
">


<Link

href="/"

className="
text-2xl
font-bold
text-blue-600
"

>

SmartLoan

</Link>



<div className="
flex
gap-4
items-center
">


<Link

href="/apply"

className="
hover:text-blue-600
"

>

Apply Loan

</Link>



<Link

href="/dashboard"

className="
hover:text-blue-600
"

>

Dashboard

</Link>



<Link

href="/admin"

className="
hover:text-blue-600
"

>

Admin

</Link>



</div>


</div>


</nav>

);


}