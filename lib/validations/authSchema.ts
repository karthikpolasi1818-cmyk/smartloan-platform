import { z } from "zod";





// ===============================
// REGISTER VALIDATION
// ===============================

export const registerSchema = z.object({



name: z
.string()

.trim()

.min(
3,
"Name must contain minimum 3 characters"
)

.max(
50,
"Name is too long"
)

.regex(

/^[a-zA-Z\s]+$/,

"Name can contain only letters"

),






email: z
.string()

.trim()

.email(
"Invalid email address"
)

.toLowerCase(),






password: z
.string()

.min(
8,
"Password must contain minimum 8 characters"
)

.max(
100,
"Password is too long"
)

.regex(

/[A-Z]/,

"Password must contain one uppercase letter"

)

.regex(

/[a-z]/,

"Password must contain one lowercase letter"

)

.regex(

/[0-9]/,

"Password must contain one number"

)

.regex(

/[^A-Za-z0-9]/,

"Password must contain one special character"

)

});









// ===============================
// LOGIN VALIDATION
// ===============================

export const loginSchema = z.object({



email:z

.string()

.trim()

.email(
"Invalid email address"
)

.toLowerCase(),






password:z

.string()

.min(

1,

"Password is required"

)


});









// ===============================
// TYPES
// ===============================


export type RegisterInput =

z.infer<typeof registerSchema>;



export type LoginInput =

z.infer<typeof loginSchema>;