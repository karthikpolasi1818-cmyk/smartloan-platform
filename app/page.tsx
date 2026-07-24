import Link from "next/link";


export default function Home(){


return (

<main className="
min-h-screen
bg-gradient-to-br
from-blue-50
to-white
flex
items-center
">


<div className="
max-w-6xl
mx-auto
px-6
grid
md:grid-cols-2
gap-10
items-center
">


<div>


<h1 className="
text-5xl
font-bold
leading-tight
">

Smart Digital Loan Platform

</h1>



<p className="
mt-5
text-gray-600
text-lg
">

Apply for loans digitally,
track approval status,
upload documents and manage
your financial journey.

</p>




<div className="
mt-8
flex
gap-4
">


<Link

href="/apply"

className="
bg-blue-600
text-white
px-6
py-3
rounded-lg
"

>

Apply Now

</Link>




<Link

href="/register"

className="
border
border-blue-600
text-blue-600
px-6
py-3
rounded-lg
"

>

Create Account

</Link>



</div>



</div>





<div className="
bg-white
shadow-xl
rounded-2xl
p-8
">


<h2 className="
text-2xl
font-bold
">

Why SmartLoan?

</h2>


<ul className="
mt-5
space-y-3
">


<li>
✓ Fast Loan Processing
</li>


<li>
✓ Secure Document Upload
</li>


<li>
✓ Real-time Application Tracking
</li>


<li>
✓ Admin Verification Workflow
</li>


</ul>


</div>




</div>


</main>

);


}