import { RecordSchema } from "cirql";
import { z } from "zod";


export const UserSchema = RecordSchema.extend({
    email: z.string(),
    password: z.string(),
    salt: z.string()
})

export const UserDB = "user"


export type User = z.infer<typeof UserSchema>