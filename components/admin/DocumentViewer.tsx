"use client";


interface Props {

documents:any[];

}



export default function DocumentViewer({

documents

}:Props){



return (

<div className="
bg-white
rounded-xl
shadow
p-6
">


<h2 className="
text-2xl
font-bold
mb-5
">

Uploaded Documents

</h2>





{

documents.length===0

?


<p className="
text-gray-500
">

No documents uploaded

</p>


:


<div className="
space-y-4
">


{

documents.map((doc)=>(


<div

key={doc.id}

className="
border
rounded-lg
p-4
flex
justify-between
items-center
"

>


<div>


<h3 className="
font-semibold
">

{doc.documentType}

</h3>


<p className="
text-sm
text-gray-500
">

{doc.fileName}

</p>


</div>





<a

href={doc.fileUrl}

target="_blank"

className="
bg-blue-600
text-white
px-4
py-2
rounded-lg
"

>

View

</a>



</div>


))

}



</div>


}




</div>

);


}