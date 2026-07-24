export type DocumentFile = {

id:string;

name:string;

type:string;

size:number;

preview:string;

status:
"UPLOADING"
|
"COMPLETED"
|
"FAILED";

};