import {
  loanSchema
} from "@/schemas/loanSchema";



describe(
"Loan Validation Tests",
()=>{



test(
"should accept valid loan application",
()=>{


const result =

loanSchema.safeParse({


loanType:
"PERSONAL",


fullName:
"Karthik Kumar",


email:
"karthik@gmail.com",


phone:
"9876543210",


pan:
"ABCDE1234F",


aadhaar:
"123456789012",


loanAmount:
500000,


tenure:
5



});



expect(
result.success
)
.toBe(true);



});







test(
"should reject invalid loan data",
()=>{


const result =

loanSchema.safeParse({


loanType:
"",


fullName:
"A",


email:
"wrongemail",


phone:
"123",


pan:
"123",


aadhaar:
"123",


loanAmount:
-500,


tenure:
0


});




expect(
result.success
)
.toBe(false);



});



});