import Image from 'next/image'
import Container from '../elements/Container'

export default async function Hero() {
  return (
    <div>
      <Container>
        <h1 className='grandient-text font-bold text-3xl sm:text-5xl text-center h-16'>
          Driving your digital growth
        </h1>
        <Image
          src='/hero.png'
          alt='hero'
          width={1125}
          height={537}
        />
      </Container>
    </div>
  )
}
