const requests = new Map();


export function rateLimit(
ip:string
){


const now =
Date.now();


const limit =
requests.get(ip);



if(
limit &&
now-limit < 60000
){

return false;

}



requests.set(
ip,
now
);


return true;


}