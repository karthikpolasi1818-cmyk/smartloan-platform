"use client";


import {
useEffect,
useState
} from "react";



export default function DocumentUpload(){



const [file,setFile] =
useState<File|null>(null);



const [type,setType] =
useState("PAN");



const [applicationId,setApplicationId] =
useState("");



const [message,setMessage] =
useState("");





useEffect(()=>{


const email =
document.cookie
.split("; ")
.find(
(row)=>row.startsWith("email=")
)
?.split("=")[1];



if(email){


fetch(

"/api/customer/current",

{

headers:{

email

}

}

)

.then(res=>res.json())

.then(data=>{


if(data.data){

setApplicationId(
data.data.id
);


}


});


}



},[]);







async function upload(){



if(!file){

setMessage(
"Please select a file"
);

return;

}



if(!applicationId){

setMessage(
"No loan application found"
);

return;

}





const response =

await fetch(

"/api/documents",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

applicationId,

documentType:type,

fileName:file.name,

fileUrl:
"/uploads/"+file.name


})


}

);




const data =
await response.json();



if(data.success){


setMessage(

"Document uploaded successfully"

);


}

else{


setMessage(

"Upload failed"

);


}



}







return(


<div className="loan-card">


<h2 className="section-title">

Upload Loan Documents

</h2>





<select

className="loan-input"

value={type}

onChange={(e)=>

setType(e.target.value)

}

>


<option value="PAN">

PAN Card

</option>


<option value="AADHAAR">

Aadhaar Card

</option>


<option value="SALARY">

Salary Slip

</option>


<option value="BANK">

Bank Statement

</option>



</select>






<input

className="loan-input"

type="file"

onChange={(e)=>

setFile(

e.target.files?.[0] || null

)

}


/>






<button

className="primary-btn"

onClick={upload}

>

Upload Document

</button>





{

message &&


<div className="success-box">

{message}

</div>


}




</div>


);


}