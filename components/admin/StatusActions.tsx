"use client";


import {useState} from "react";

import toast from "react-hot-toast";



interface Props{

applicationId:string;

refresh:()=>void;

}



export default function StatusActions({

applicationId,

refresh

}:Props){


const [loading,setLoading]=useState(false);




async function updateStatus(status:string){


setLoading(true);



try{


const response = await fetch(

"/api/admin/status",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

applicationId,

status

})

}

);



const data =
await response.json();



if(data.success){


toast.success(

`Application ${status}`

);


refresh();


}

else{


toast.error(

data.message

||
"Update failed"

);


}



}

catch(error){


toast.error(

"Something went wrong"

);


}

finally{


setLoading(false);


}


}





return (

<div className="
flex
gap-2
">


<button

disabled={loading}

onClick={()=>updateStatus("APPROVED")}

className="
bg-green-600
text-white
px-3
py-2
rounded-lg
"

>

Approve

</button>




<button

disabled={loading}

onClick={()=>updateStatus("REJECTED")}

className="
bg-red-600
text-white
px-3
py-2
rounded-lg
"

>

Reject

</button>



</div>

);


}