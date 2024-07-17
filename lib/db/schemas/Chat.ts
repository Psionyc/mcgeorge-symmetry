import { RecordSchema } from "cirql"
import { Message, MessageSchema } from "./Message"
import { z } from "zod"
import { create } from "domain"

export const ChatSchema = RecordSchema.extend({
    title: z.string(),
    createdAt: z.any(),
    userId: z.string(),
    path: z.string(),
    sharePath: z.string().optional(),
    messages: z.array(MessageSchema),
})


export type Chat = z.infer<typeof ChatSchema>