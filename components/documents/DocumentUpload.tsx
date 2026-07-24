"use client";


import {
useState
}
from "react";



interface Props {

applicationId:string;

}



export default function DocumentUpload({

applicationId

}:Props){



const [file,setFile]=
useState<File | null>(null);



const [type,setType]=
useState("PAN");



const [message,setMessage]=
useState("");



const [loading,setLoading]=
useState(false);





async function uploadFile(){


if(!file){

setMessage(
"Please select a file"
);

return;

}



try{


setLoading(true);


setMessage("");



const formData =
new FormData();



formData.append(
"file",
file
);



formData.append(
"applicationId",
applicationId
);



formData.append(
"documentType",
type
);





const response =
await fetch(
"/api/upload",
{

method:"POST",

body:formData

}

);



const result =
await response.json();



if(!response.ok){

throw new Error(
result.message ||
"Upload failed"
);

}




setMessage(
"Document uploaded successfully"
);



setFile(null);



}

catch(error:any){


setMessage(
error.message
);


}

finally{


setLoading(false);


}


}





return(

<div

className="
bg-white
rounded-3xl
shadow-xl
p-8
space-y-6
"

>


<h2

className="
text-2xl
font-bold
text-blue-900
"

>

Upload Documents

</h2>





<select

className="
input
"

value={type}

onChange={
(e)=>
setType(e.target.value)
}

>


<option value="PAN">
PAN Card
</option>


<option value="AADHAAR">
Aadhaar Card
</option>


<option value="SALARY_SLIP">
Salary Slip
</option>


<option value="BANK_STATEMENT">
Bank Statement
</option>


<option value="EMPLOYMENT_PROOF">
Employment Proof
</option>


</select>





<input

type="file"

className="
border
p-3
rounded-xl
w-full
"

accept="
.pdf,
.image/*
"

onChange={
(e)=>
setFile(
e.target.files?.[0] || null
)
}

/>






<button

onClick={uploadFile}

disabled={loading}

className="
bg-blue-600
text-white
px-8
py-3
rounded-xl
font-bold
"

>


{

loading ?

"Uploading..." :

"Upload Document"

}


</button>





{

message &&

<p

className="
text-center
font-semibold
"

>

{message}

</p>

}



</div>

);

}