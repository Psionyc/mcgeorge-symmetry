import * as React from 'react'
import { UserOrLogin } from '@/server/UserOrLogin';
import { getServerSideProps } from 'next/dist/build/templates/pages';



export function Header() {

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <UserOrLogin />
        </React.Suspense>
      </div>
      <div className="flex items-center justify-end space-x-2">

      </div>
    </header>
  )


}
