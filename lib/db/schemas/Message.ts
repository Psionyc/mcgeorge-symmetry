import { RecordSchema } from "cirql";
import { z } from "zod";


export const MessageSchema = z.any()

export type Message = z.infer<typeof MessageSchema>