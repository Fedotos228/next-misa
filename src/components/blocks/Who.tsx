import Image from 'next/image'
import Container from '../elements/Container'

export default function Who() {
  return (
    <div className='relative bg-[#33BAFA] py-[100px]'>
      <img src="/group.svg" alt="ss" className='absolute -top-20 right-0 w-24  md:w-fit' />
      <Container className='relative'>
        <div className='max-w-[445px]'>
          <h3 className=''>
            <img src="/Union.svg" alt="huita" />
            Who are we
          </h3>
          <p>Dynamitt is an experienced team of full stack developers, IT project managers and product owners located in several countries across Europe. The Dynamitt Development team specializes in web development and is an expert partner for custom made websites, platforms and online stores. </p>
        </div>
        <Image
          src='/who.png'
          alt='who'
          width={600}
          height={480}
          className='block mt-6 md:absolute right-0 top-0'
        />
      </Container>
    </div>
  )
}
