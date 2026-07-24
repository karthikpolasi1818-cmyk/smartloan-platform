"use client";


import UploadBox
from "@/components/documents/UploadBox";


import {
useApplicationStore
}
from "@/store/applicationStore";



export default function DocumentUploadForm(){



const next=
useApplicationStore(
s=>s.nextStep
);



return(

<div>


<UploadBox/>


<button

onClick={next}

className="

mt-8

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

Continue


</button>



</div>


)

}