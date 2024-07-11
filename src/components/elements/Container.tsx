import { cn } from '@/lib/utils'
import type { PropsWithChildren } from 'react'

export default function Container({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn('max-w-[1125px] mx-auto px-4', className)}>{children}</div>
}
