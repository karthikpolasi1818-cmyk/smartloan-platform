import {z} from "zod";


export const addressSchema = z.object({

address:
z.string()
.min(10,"Address required"),


city:
z.string()
.min(2,"City required"),


state:
z.string()
.min(2,"State required"),


employmentType:
z.enum([
"SALARIED",
"SELF_EMPLOYED",
"BUSINESS"
]),


company:
z.string()
.optional(),


monthlyIncome:
z.number()
.min(1000,"Income required")

});


export type AddressData =
z.infer<typeof addressSchema>;