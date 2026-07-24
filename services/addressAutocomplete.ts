export async function searchAddress(
query:string
){


return new Promise<any[]>((resolve)=>{


setTimeout(()=>{


resolve([

{
address:
"Hyderabad, Telangana",

city:
"Hyderabad",

state:
"Telangana"

},

{
address:
"Bangalore, Karnataka",

city:
"Bangalore",

state:
"Karnataka"

}


])


},500)



})


}