import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";



export async function PUT(
request:Request
){


try{


const body =
await request.json();



const updatedApplication =
await prisma.loanApplication.update({

where:{
id:body.id
},


data:{


approvalStatus:
body.status,


status:
body.status


}


});




return NextResponse.json({

success:true,

data:updatedApplication


});



}

catch(error){


console.log(error);



return NextResponse.json({

success:false,

message:"Update failed"

},

{
status:500
}

);


}


}