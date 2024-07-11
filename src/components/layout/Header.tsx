import Image from 'next/image'
import Container from '../elements/Container'

export default function Header() {
  return (
    <header>
      <Container>
        <div className='flex items-center justify-between'>
          <Image
            src={'/logo.png'}
            alt='logo'
            width={150}
            height={70}
          />
          <button className='gradient grandient-text'>
            Let's Talk
          </button>
        </div>
      </Container>
    </header>
  )
}
