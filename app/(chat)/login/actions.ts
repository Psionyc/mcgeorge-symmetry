'use server'

import { signIn } from '@/auth'

import { AuthError } from 'next-auth'
import { z } from 'zod'
import { ResultCode } from '@/lib/utils'
import { db } from '@/lib/db/db'
import { select } from 'cirql'
import { User, UserDB } from '@/lib/db/schemas'


export async function getUser(email: string) {
  const user: User = await db.execute({
    schema: z.any(),
    query: select().from(UserDB).where({
      email: email
    }).one()
  })

  return user
}

interface Result {
  type: string
  resultCode: ResultCode
}

export async function authenticate(
  _prevState: Result | undefined,
  formData: FormData
): Promise<Result | undefined> {
  try {
    const email = formData.get('email')
    const password = formData.get('password')

    const parsedCredentials = z
      .object({
        email: z.string().email(),
        password: z.string().min(6)
      })
      .safeParse({
        email,
        password
      })

    if (parsedCredentials.success) {
      await signIn('credentials', {
        email,
        password,
        redirect: false
      })

      return {
        type: 'success',
        resultCode: ResultCode.UserLoggedIn
      }
    } else {
      return {
        type: 'error',
        resultCode: ResultCode.InvalidCredentials
      }
    }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            type: 'error',
            resultCode: ResultCode.InvalidCredentials
          }
        default:
          return {
            type: 'error',
            resultCode: ResultCode.UnknownError
          }
      }
    }
  }
}
