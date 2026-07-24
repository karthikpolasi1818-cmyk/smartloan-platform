import {NextResponse} from "next/server";

import {prisma} from "@/lib/prisma";



export async function GET(
request:Request
){


const applicationId =
request.headers.get(
"applicationId"
);



const history =

await prisma.loanStatusHistory.findMany({

where:{

applicationId:
applicationId || ""

},


orderBy:{

createdAt:"asc"

}

});



return NextResponse.json({

success:true,

data:history

});


}