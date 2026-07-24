import { z } from "zod";


export const loanApplicationSchema = z.object({


loanType: z
.string()
.min(2,"Loan type is required"),



fullName: z
.string()
.min(3,"Name must contain minimum 3 characters"),



email: z
.string()
.email("Invalid email format"),



phone: z
.string()
.regex(
/^[0-9]{10}$/,
"Phone number must contain 10 digits"
),



pan: z
.string()
.regex(
/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
"Invalid PAN format"
),



aadhaar: z
.string()
.regex(
/^[0-9]{12}$/,
"Aadhaar must contain 12 digits"
),




address: z
.string()
.optional(),



city: z
.string()
.optional(),



state: z
.string()
.optional(),





employmentType: z
.string()
.optional(),




companyName: z
.string()
.optional(),





monthlyIncome: z
.number()
.optional(),





loanAmount: z
.number()
.positive(
"Loan amount must be greater than zero"
),




tenure: z
.number()
.int()
.positive(
"Tenure must be positive"
),




interestRate: z
.number()
.positive(
"Interest rate must be positive"
)


});