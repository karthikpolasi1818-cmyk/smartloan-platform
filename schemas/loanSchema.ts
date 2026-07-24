import { z } from "zod";


export const loanSchema = z.object({


loanType:z.string()
.min(2),


fullName:z.string()
.min(3),


email:z.string()
.email(),


phone:z.string()
.min(10)
.max(15),



pan:z.string()
.min(10)
.max(10),



aadhaar:z.string()
.min(12)
.max(12),



loanAmount:z.number()
.positive(),



tenure:z.number()
.positive()


});