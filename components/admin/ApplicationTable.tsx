"use client";

import { useEffect, useState } from "react";
import StatusUpdate from "./StatusUpdate";


interface Application {


    id:string;

    fullName:string;

    email:string;

    phone:string;

    loanType:string;

    loanAmount:number;

    tenure:number;

    approvalStatus:string;

    status:string;

    createdAt:string;

    documents:any[];

}



export default function ApplicationTable(){



const [
    applications,
    setApplications
] = useState<Application[]>([]);



const [
    loading,
    setLoading
] = useState(true);





const fetchApplications = async()=>{


    try{


        setLoading(true);



        const response =
            await fetch(
                "/api/admin/applications"
            );



        const data =
            await response.json();




        if(data.success){

            setApplications(
                data.applications
            );

        }



    }
    catch(error){

        console.error(
            "Fetch error:",
            error
        );

    }
    finally{

        setLoading(false);

    }


};





useEffect(()=>{

    fetchApplications();

},[]);






if(loading){


return (

<div className="bg-white rounded-xl shadow p-8 text-center">

<p className="text-gray-600">

Loading applications...

</p>

</div>

);


}






return (

<div className="bg-white rounded-xl shadow-lg p-6">


<div className="flex justify-between items-center mb-6">


<h2 className="text-2xl font-bold">

Loan Applications

</h2>



<button

onClick={fetchApplications}

className="
bg-blue-600
text-white
px-4
py-2
rounded-lg
hover:bg-blue-700
"

>

Refresh

</button>


</div>







{
applications.length === 0 ?


(

<div className="text-center py-10">

<p className="text-gray-500">

No applications found

</p>

</div>

)


:


(

<div className="overflow-x-auto">


<table className="w-full border-collapse">


<thead>


<tr className="bg-gray-100">


<th className="border p-3 text-left">
Applicant
</th>


<th className="border p-3 text-left">
Loan Type
</th>


<th className="border p-3 text-left">
Amount
</th>


<th className="border p-3 text-left">
Tenure
</th>


<th className="border p-3 text-left">
Status
</th>


<th className="border p-3 text-left">
Documents
</th>


<th className="border p-3 text-left">
Actions
</th>


</tr>


</thead>





<tbody>



{
applications.map((application)=>(


<tr
key={application.id}
className="hover:bg-gray-50"
>



<td className="border p-3">


<div>

<p className="font-semibold">

{application.fullName}

</p>


<p className="text-sm text-gray-500">

{application.email}

</p>


</div>


</td>





<td className="border p-3">

{application.loanType}

</td>





<td className="border p-3">

₹ {application.loanAmount.toLocaleString()}

</td>





<td className="border p-3">

{application.tenure} Months

</td>





<td className="border p-3">


<span

className={`
px-3
py-1
rounded-full
text-sm
font-medium

${
application.approvalStatus === "APPROVED"

?

"bg-green-200 text-green-800"

:

application.approvalStatus === "REJECTED"

?

"bg-red-200 text-red-800"

:

"bg-yellow-200 text-yellow-800"

}

`}

>

{application.approvalStatus}

</span>


</td>






<td className="border p-3">


{
application.documents?.length || 0
}

 Files


</td>







<td className="border p-3">


<StatusUpdate


applicationId={
application.id
}


currentStatus={
application.approvalStatus
}


refresh={
fetchApplications
}


/>


</td>





</tr>


))

}



</tbody>



</table>


</div>


)

}





</div>


);


}