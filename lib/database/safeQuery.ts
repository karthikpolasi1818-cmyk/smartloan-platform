export function validateId(
id:string
){

if(!id){

throw new Error(
"Invalid ID"
);

}


if(id.length > 100){

throw new Error(
"Invalid ID length"
);

}



return id;

}