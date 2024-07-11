import Image from 'next/image'
import Container from '../elements/Container'

const offers: any = [
  {
    title: 'Ecommerce',
    image: '/store.svg',
    desc: 'Kickstart your online sales with a web shop tailored to your business. Discover how we can help you to craft intuitive online shopping experiences. We can integrate your ERP-system and your accounting software via API so that everything connects smoothly and everything is in the right place right away!'
  },
  {
    title: 'CMS',
    image: '/cms.svg',
    desc: 'Are you looking for a specialised partner that can help you develop your new corporate website? Or someone that will be totally honest with you about your current website and on how to improve it? You have entered the right District! Let us guide you through our way of working.'
  },
  {
    title: 'Web Applications',
    image: '/terminal.svg',
    desc: 'Are you sitting on top of a deliberate digital business idea and are you looking for a partner to commercialize your validated concept? Let us guide you along the road from ideation to delivery.'
  }
]

export default function Offer() {
  return (
    <section className='my-14'>
      <Container>

        <h3 className=''>
          <img src="/Union.svg" alt="huita" />
          What do we offer
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {
            offers.map((offer: any, index: number) => (
              <div className='shadow-lg rounded-b-md' key={index}>
                <div className='bg-[#4B9CFF] p-6 rounded-t-md'>
                  <h4 className='text-white text-2xl'>
                    - {offer.title}
                  </h4>
                </div>
                <div className='p-9'>
                  <div className='bg-[#4B9CFF26] w-fit p-3 rounded-sm mb-5'>
                    <Image
                      src={offer.image}
                      alt='store'
                      width={52}
                      height={52}
                    />
                  </div>
                  <p>{offer.desc}</p>
                </div>
              </div>
            ))
          }
        </div>
      </Container>
    </section>
  )
}
