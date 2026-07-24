"use client";

import { useState } from "react";


interface Props {

    applicationId:string;

    currentStatus:string;

    refresh:()=>void;

}



export default function StatusUpdate({

    applicationId,

    currentStatus,

    refresh

}:Props){


const [loading,setLoading] = useState(false);

const [remark,setRemark] = useState("");



async function updateStatus(
    status:string
){


try{


setLoading(true);



const response = await fetch(
"/api/admin/status",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

applicationId,

status,

remark

})

}

);



const data = await response.json();



if(data.success){

setRemark("");

refresh();

}


}

catch(error){

console.error(
"Status update failed",
error
);

}

finally{

setLoading(false);

}


}





return (

<div className="space-y-3">


<textarea

value={remark}

onChange={(e)=>
setRemark(e.target.value)
}

placeholder="Admin remark"

className="
border
rounded-lg
p-2
w-full
text-sm
"

/>




<div className="flex gap-2">


<button

disabled={loading || currentStatus==="APPROVED"}

onClick={()=>
updateStatus("APPROVED")
}

className="
bg-green-600
text-white
px-3
py-2
rounded-lg
hover:bg-green-700
disabled:opacity-50
"

>

Approve

</button>




<button

disabled={loading || currentStatus==="REJECTED"}

onClick={()=>
updateStatus("REJECTED")
}

className="
bg-red-600
text-white
px-3
py-2
rounded-lg
hover:bg-red-700
disabled:opacity-50
"

>

Reject

</button>


</div>


</div>

);


}