import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";



export async function GET(

request:NextRequest

){


try{


const documents =

await prisma.document.findMany({

include:{

application:true

},

orderBy:{

uploadedAt:"desc"

}

});




return NextResponse.json({

success:true,

documents

});


}

catch(error){


console.error(error);



return NextResponse.json(

{

success:false,

message:"Failed to fetch documents"

},

{

status:500

}

);


}


}