import { z } from "zod";


export const personalSchema = z.object({

  fullName: z
    .string()
    .min(3, "Name must contain minimum 3 characters"),


  email: z
    .string()
    .email("Enter valid email address"),


  phone: z
    .string()
    .min(10, "Phone number must contain 10 digits")
    .max(15, "Invalid phone number")

});



export type PersonalData =
z.infer<typeof personalSchema>;