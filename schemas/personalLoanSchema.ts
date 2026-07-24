import {z} from "zod";


export const personalLoanSchema = z.object({

name:
z.string()
.min(3,"Name must contain minimum 3 characters"),


email:
z.string()
.email("Invalid email"),


phone:
z.string()
.length(10,"Phone must be 10 digits"),


pan:
z.string()
.regex(
/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
"Invalid PAN format"
),


aadhaar:
z.string()
.length(12,"Aadhaar must be 12 digits")


});


export type PersonalLoanFormData =
z.infer<typeof personalLoanSchema>;