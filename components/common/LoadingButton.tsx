"use client";


interface Props{

loading:boolean;

children:React.ReactNode;

type?:
"button"
|
"submit";

}



export default function LoadingButton({

loading,

children,

type="button"

}:Props){


return (

<button

type={type}

disabled={loading}

className="
bg-blue-600
text-white
px-5
py-3
rounded-lg
hover:bg-blue-700
disabled:opacity-50
"

>


{

loading

?

"Please wait..."

:

children

}



</button>

);


}