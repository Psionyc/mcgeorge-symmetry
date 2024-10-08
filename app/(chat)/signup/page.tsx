import { auth } from '@/auth'
import SignupForm from '@/components/signup-form'
import { Session } from '@/lib/types'
import { redirect } from 'next/navigation'

export default async function SignupPage() {
  const session = (await auth()) as Session

  if (session) {
    redirect('/chat')
  }

  return (
    <main className="flex flex-col p-4  items-center w-full">
      <SignupForm />
    </main>
  )
}
