"use client";


type Props={

file?:File|null;

}



export default function Preview(
{
file
}:Props
){


if(!file)
return null;



const url=
URL.createObjectURL(file);



return(

<div

className="
mt-5
p-5
bg-blue-50
rounded-xl
"

>


<h3

className="
font-bold
text-blue-900
"

>

Preview

</h3>



{

file.type.includes("image")

?

<img

src={url}

className="
w-48
rounded-lg
mt-3
"

/>

:

<div

className="
mt-3
text-gray-700
"

>

📄 {file.name}

</div>


}



</div>


)


}