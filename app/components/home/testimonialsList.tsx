
import { useLoaderData } from '@remix-run/react'
import { IndexPageData } from '~/types/types'
import { largeBasicButton } from '~/utils/styles'
import Testimonial from '../Testimonials/testimonial'
import InfoWrapper from '../wrappers/infoWrapper'

const TestimonialsList = () => {

  const {testimonials} = useLoaderData<IndexPageData>()

  return (
      <InfoWrapper subHeading={testimonials.sub_heading} heading={testimonials.heading}>
      <section className='flex flex-col md:flex-row w-full items-center justify-center md:py-[50px] h-auto gap-10'>
       {testimonials.data.map((testimonial) => {
         return  <Testimonial key={Math.random()*100} testimonial={testimonial} />
       })}
       </section>
       <button className={`${largeBasicButton} mb-[50px]`}>More Reviews</button>
      </InfoWrapper>
  )
}

export default TestimonialsList