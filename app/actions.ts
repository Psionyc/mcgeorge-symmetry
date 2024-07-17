'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { auth } from '@/auth'
import { type Chat } from '@/lib/types'
import { db } from '@/lib/db/db'
import { ChatSchema } from '@/lib/db/schemas'
import { select, del, delRecord, updateRecord, create, } from 'cirql'


export async function getChats(userId?: string | null) {
  if (!userId) {
    return []
  }

  try {
    const results = await db.execute({
      schema: ChatSchema,
      query: select().from('chat').where({ userId })
    })


    return results;
  } catch (error) {
    return []
  }
}

export async function getChat(id: string, userId: string) {

  let newId: string = id;

  if (newId.includes('%3A')) newId = newId.replace('%3A', ':')





  const chat = await db.execute({
    schema: ChatSchema,
    query: select().fromRecord(newId)
  })



  if (!chat || (userId && chat.userId !== userId)) {
    return null
  }

  return chat
}

export async function removeChat({ id, path }: { id: string; path: string }) {
  const session = await auth()

  if (!session) {
    return {
      error: 'Unauthorized'
    }
  }

  await db.execute({
    schema: ChatSchema,
    query: delRecord(id)
  })

  revalidatePath('/')
  return revalidatePath(path)
}

export async function clearChats() {
  const session = await auth()

  if (!session?.user?.id) {
    return {
      error: 'Unauthorized'
    }
  }

  const chats = await getChats(session.user.id)

  db.execute(
    {
      schema: ChatSchema,
      query: del([chats.map(chat => chat.id)])
    }
  )

  revalidatePath('/chat')
  return redirect('/chat')
}

export async function getSharedChat(id: string) {

  let newId: string = id;

  if (newId.includes('%3A')) newId = newId.replace('%3A', ':')





  const chat = await db.execute({
    schema: ChatSchema,
    query: select().fromRecord(newId)
  })


  if (!chat || !chat.sharePath) {
    return null
  }

  return chat
}

export async function shareChat(id: string) {
  const session = await auth()

  if (!session?.user?.id) {
    return {
      error: 'Unauthorized'
    }
  }

  const chat = await getChat(id, session.user.id)

  if (!chat || chat.userId !== session.user.id) {
    return {
      error: 'Something went wrong'
    }
  }

  const payload = {
    ...chat,
    sharePath: `/share/${chat.id}`
  }

  await db.execute({
    schema: ChatSchema,
    query: updateRecord(chat.id).set('sharePath', payload.sharePath)
  })

  return payload
}

export async function saveChat(chat: Chat) {
  const session = await auth()

  if (session && session.user) {




    const pChat = await getChat(chat.id, session.user.id);

    if (!pChat) await db.execute({
      schema: ChatSchema,
      query: create("chat").content(chat)
    })

    else await db.execute({
      schema: ChatSchema,
      query: updateRecord(`${chat.id}`).content(chat)

    })

    // const pipeline = kv.pipeline()
    // pipeline.hmset(`chat:${chat.id}`, chat)
    // pipeline.zadd(`user:chat:${chat.userId}`, {
    //   score: Date.now(),
    //   member: `chat:${chat.id}`
    // })
    // await pipeline.exec()
  } else {
    return
  }
}

export async function refreshHistory(path: string) {
  redirect(path)
}

export async function getMissingKeys() {
  const keysRequired = ['OPENAI_API_KEY']
  return keysRequired
    .map(key => (process.env[key] ? '' : key))
    .filter(key => key !== '')
}
