export async function uploadFile(
file:File,
onProgress:(value:number)=>void
){


return new Promise<string>((resolve)=>{


let progress=0;



const interval=setInterval(()=>{


progress+=10;


onProgress(progress);



if(progress>=100){


clearInterval(interval);


resolve(
URL.createObjectURL(file)
);


}


},200);



});


}





export function compressImage(
file:File
){


return new Promise<File>((resolve)=>{


setTimeout(()=>{


resolve(file);


},500);



});


}