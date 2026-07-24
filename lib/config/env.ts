const requiredEnv = [

"DATABASE_URL",

"JWT_SECRET",

"NEXT_PUBLIC_SUPABASE_URL",

"SUPABASE_SERVICE_ROLE_KEY"

];




requiredEnv.forEach((key)=>{


if(!process.env[key]){


throw new Error(

`Missing environment variable: ${key}`

);


}


});





export const env = {


DATABASE_URL:

process.env.DATABASE_URL!,


JWT_SECRET:

process.env.JWT_SECRET!,


SUPABASE_URL:

process.env.NEXT_PUBLIC_SUPABASE_URL!,


SUPABASE_SERVICE_KEY:

process.env.SUPABASE_SERVICE_ROLE_KEY!


};