import type { PropsWithChildren } from 'react'

export default function Container({ children }: PropsWithChildren<unknown>) {
  return <div className='max-w-[1200px] mx-auto'>{children}</div>
}
