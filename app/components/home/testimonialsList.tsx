
import { Link, useLoaderData } from '@remix-run/react'
import { IndexPageData } from '~/types/types'
import { largeBasicButton } from '~/utils/styles'
import Testimonial from '../Testimonials/testimonial'
import InfoWrapper from '../wrappers/infoWrapper'
import {motion} from 'framer-motion'
import { fade } from '~/utils/animations/basicAnim'

const TestimonialsList = () => {

  const {testimonials} = useLoaderData<IndexPageData>()

  return (
      <InfoWrapper subHeading={testimonials.sub_heading} heading={testimonials.heading} id="reviews">
      <section className='flex overflow-x-scroll justify-start flex-row w-full items-center lg:justify-center lg:py-[50px] h-auto gap-10 col-start-1 col-span-full no-scrollbar'>
       {testimonials.data.map((testimonial,index) => {
         return  <Testimonial key={Math.random()*100} testimonial={testimonial} delay={(index+2)/10} />
       })}
       </section>
       <section className='col-start-1 col-span-full overflow-visible h-auto flex justify-center items-center py-[50px] lg:py-0'>
       <button className={`${largeBasicButton} mb-[50px]`}><Link to="/reviews">More Reviews</Link></button>
       </section>
      </InfoWrapper>
  )
}

export default TestimonialsList