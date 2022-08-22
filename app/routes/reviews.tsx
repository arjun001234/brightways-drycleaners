import { json, LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import Testimonial from '~/components/testimonials/testimonial'
import InfoWrapper from '~/components/wrappers/infoWrapper'
import { testimonialData } from '~/data/data'
import { ReviewsPageDataType } from '~/types/types'

export const loader: LoaderFunction = async () => {

      return json({
        reviews: testimonialData
      })
}

const Reviews = () => {

  const {reviews} = useLoaderData<ReviewsPageDataType>();

  return (
    <InfoWrapper id="reviews">
        <div className='col-start-1 col-span-full flex flex-col gap-10'>
           {reviews.map((review) => {
            return  <Testimonial testimonial={review} key={review.id} delay={0.2} />
           })}
        </div>
    </InfoWrapper>
  )
}

export default Reviews