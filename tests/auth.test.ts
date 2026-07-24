import bcrypt from "bcrypt";



describe(
"Authentication Tests",
()=>{



test(
"password should hash correctly",
async()=>{


const password =
"admin123";



const hash =

await bcrypt.hash(

password,

12

);



const verified =

await bcrypt.compare(

password,

hash

);



expect(
verified
)
.toBe(true);



});






test(
"wrong password should fail",
async()=>{


const password =
"admin123";


const wrongPassword =
"123456";



const hash =

await bcrypt.hash(

password,

12

);



const verified =

await bcrypt.compare(

wrongPassword,

hash

);



expect(
verified
)
.toBe(false);



});



});