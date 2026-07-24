"use client";


interface Props {

loading:boolean;

children:React.ReactNode;

}



export default function FormButton({

loading,

children

}:Props){


return (

<button

type="submit"

disabled={loading}

className="
w-full
bg-blue-600
text-white
py-3
rounded-lg
font-semibold
hover:bg-blue-700
disabled:bg-gray-400
transition
"

>


{

loading

?

"Submitting..."

:

children

}


</button>

);


}