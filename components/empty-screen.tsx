import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (

   
    <div className="mx-auto max-w-2xl px-4">
    <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
      <h1 className="text-lg font-semibold">
        Welcome to Symettry AI!
      </h1>
      <p className="leading-normal text-muted-foreground">
        Symettry revolutionizes fashion with cutting-edge AI, analyzing trends, fabrics, and styles to keep you ahead.
      </p>
      <p className="leading-normal text-muted-foreground">
        Designers, retailers, and fashion enthusiasts benefit from our tailored solutions. Experience the future of fashion with Symettry.
      </p>
    </div>
  </div>
  
  )
}
