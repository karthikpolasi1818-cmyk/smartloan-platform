interface RateLimitRecord {

count:number;

timestamp:number;

}



const requests = new Map<string,RateLimitRecord>();





export function rateLimit(

ip:string,

limit:number = 10,

windowMs:number = 60 * 1000

){



const now = Date.now();



const record = requests.get(ip);





if(!record){


requests.set(

ip,

{

count:1,

timestamp:now

}

);



return true;


}







// Reset after time window

if(now - record.timestamp > windowMs){



requests.set(

ip,

{

count:1,

timestamp:now

}

);



return true;


}






// Block if limit exceeded

if(record.count >= limit){


return false;


}






record.count += 1;


requests.set(

ip,

record

);




return true;


}
