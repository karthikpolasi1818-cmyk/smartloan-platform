import { NextRequest, NextResponse } from "next/server";

import { supabase } from "@/lib/supabase/client";



const MAX_FILE_SIZE = 5 * 1024 * 1024;


const allowedTypes = [

"image/jpeg",

"image/png",

"application/pdf"

];





export async function POST(

request:NextRequest

){


try{


const formData = await request.formData();



const file =

formData.get("file") as File;




if(!file){


return NextResponse.json(

{

success:false,

message:"No file uploaded"

},

{
status:400
}

);


}






// FILE SIZE CHECK

if(file.size > MAX_FILE_SIZE){


return NextResponse.json(

{

success:false,

message:"File size must be below 5MB"

},

{
status:400
}

);


}






// FILE TYPE CHECK

if(!allowedTypes.includes(file.type)){


return NextResponse.json(

{

success:false,

message:"Only PDF, JPG and PNG files allowed"

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





const fileName =

`${Date.now()}-${file.name}`;






const {error} =

await supabase.storage

.from("documents")

.upload(

fileName,

buffer,

{

contentType:file.type

}

);






if(error){


return NextResponse.json(

{

success:false,

message:"Upload failed"

},

{
status:500
}

);


}






const {

data

}=

supabase.storage

.from("documents")

.getPublicUrl(fileName);






return NextResponse.json(

{

success:true,

url:data.publicUrl

}

);



}

catch(error){


console.error(error);



return NextResponse.json(

{

success:false,

message:"Upload error"

},

{
status:500
}

);


}


}