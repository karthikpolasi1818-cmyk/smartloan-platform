import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";



export async function GET(){


try{


const applications =
await prisma.loanApplication.findMany({

orderBy:{
createdAt:"desc"
}

});



return NextResponse.json({

success:true,

data:applications

});


}


catch(error){


console.log(error);



return NextResponse.json({

success:false,

message:"Failed to fetch applications"

},

{
status:500
}

);


}


}