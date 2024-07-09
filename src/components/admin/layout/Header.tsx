import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function Header() {
  return (
    <Card className='flex items-center justify-between mt-3 py-5 px-4 rounded-sm'>
      <h2>Admin panel</h2>
      <Button>
        <Link href="/">
          Logout
        </Link>
      </Button>
    </Card>
  )
}
