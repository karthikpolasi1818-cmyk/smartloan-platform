interface Props{

title:string;

message:string;

}



export default function EmptyState({

title,

message

}:Props){


return (

<div className="
bg-white
rounded-xl
shadow
p-10
text-center
">


<h2 className="
text-2xl
font-bold
">

{title}

</h2>



<p className="
text-gray-500
mt-3
">

{message}

</p>



</div>

);


}