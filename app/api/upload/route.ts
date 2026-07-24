import {
NextRequest,
NextResponse
}
from "next/server";


import {
supabaseAdmin
}
from "@/lib/supabaseAdmin";


import {
prisma
}
from "@/lib/prisma";




export async function POST(
req:NextRequest
){


try{


const formData =
await req.formData();



const file =
formData.get("file") as File;



const applicationId =
formData.get(
"applicationId"
) as string;



const documentType =
formData.get(
"documentType"
) as string;



if(!file){

return NextResponse.json(

{
message:"File required"
},

{
status:400
}

);

}



if(!applicationId){

return NextResponse.json(

{
message:"Application ID required"
},

{
status:400
}

);

}




const bytes =
await file.arrayBuffer();



const buffer =
Buffer.from(bytes);



const filePath =

`${applicationId}/${Date.now()}-${file.name}`;




const upload =

await supabaseAdmin

.storage

.from(
"loan-documents"
)

.upload(

filePath,

buffer,

{

contentType:file.type,

upsert:false

}

);





if(upload.error){

throw upload.error;

}




const document =

await prisma.document.create({

data:{


applicationId,


documentType,


fileName:file.name,


fileUrl:filePath


}

});





return NextResponse.json(

{

success:true,

document

},

{

status:201

}

);



}

catch(error:any){


console.log(error);


return NextResponse.json(

{

success:false,

message:error.message

},

{

status:500

}

);


}


}