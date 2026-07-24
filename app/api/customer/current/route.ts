import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";



export async function GET(
request:Request
){

try{


const email =
request.headers.get("email");



const application =

await prisma.loanApplication.findFirst({

where:{

email: email || ""

},


orderBy:{

createdAt:"desc"

}

});



return NextResponse.json({

success:true,

data:application

});


}

catch(error){


console.log(error);



return NextResponse.json({

success:false,

message:"Failed to fetch application"

},

{
status:500
}

);


}


}