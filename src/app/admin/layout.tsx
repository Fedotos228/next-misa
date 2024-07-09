import Header from '@/components/admin/layout/Header'
import Container from '@/components/elements/Container'
import type { PropsWithChildren } from 'react'

export default function AdminLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className='bg-background'>
      <Container>
        <Header />
        {children}
      </Container>
    </div>
  )
}
