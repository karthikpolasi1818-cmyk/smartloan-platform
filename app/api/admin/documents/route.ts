import {NextResponse} from "next/server";

import {prisma} from "@/lib/prisma";



export async function GET(){


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

data:documents

});


}

catch(error){


return NextResponse.json({

success:false

},

{
status:500
}

);


}


}