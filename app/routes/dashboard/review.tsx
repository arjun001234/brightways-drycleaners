import { ActionFunction, json, LoaderFunction } from '@remix-run/node'
import { useActionData, useLoaderData, useTransition } from '@remix-run/react'
import React from 'react'
import { BsPen } from 'react-icons/bs'
import { toast } from 'react-toastify'
import Input from '~/components/ui/input'
import { definitions } from '~/supabase'
import { isAuthenticated, supabaseAdmin } from '~/supabase/supabase.server'
import { FormResponse, Review, ReviewValidationError } from '~/types/types'
import { createReview } from '~/utils/helpers/createReview'
import { lessRoundedBasicInput, lessRoundedBasicLargeButtonFull } from '~/utils/styles'

type LoaderDataType = {
  error?: string,
  reviews?: definitions['reviews'][]
}

export const action : ActionFunction = async ({request}) => {
    const formData = await request.formData()
    const [review,actionData] = createReview(formData)
    if(actionData){
      return json({
        validationactionData: actionData
      })
    }
    if(review){
      const [user,error] = await isAuthenticated(request,true)
      if(error){
        console.log(error)
        return json({
          error: error.message
        })
      }

      if(user){
        const reviewResponse = await supabaseAdmin.from<definitions['reviews']>("reviews").insert({profile_id: user?.id,review: review.review,rating: review.rating})
        if(reviewResponse.error){
          console.log(reviewResponse,error)
          return json({
            error: reviewResponse.error.message
          })
        }

        return json({
          success: reviewResponse.data
        })
      }
    }
    return json({
      error: "something went wrong"
    })
}

export const loader : LoaderFunction  = async ({request}) => {
  const [user,error] = await isAuthenticated(request,true)
  if(error){
    console.log(error)
    return json({
      error: error.message
    })
  }

  const reviewsResponse = await supabaseAdmin.from<definitions['reviews']>("reviews").select("*").eq("profile_id",user?.id)
  if(reviewsResponse.error){
    console.log(reviewsResponse.error)
    return json({
      error: reviewsResponse.error.message
    })
  }

  return json({
    reviews: reviewsResponse.data
  })
}

const Review = () => {

  const transition = useTransition()
  const data = useLoaderData<LoaderDataType>();
  const actionData = useActionData<FormResponse<Review,ReviewValidationError>>()
  const [validationError,setValidationError] = React.useState<ReviewValidationError>(actionData?.validationErrors ? actionData.validationErrors : {})

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      if(value.length === 0){
        setValidationError(prev => ({...prev,review: "review required"}))
      }else if(value.length < 5){
        setValidationError(prev => ({...prev,review: "review too short"}))
      }
  }

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if(value.length > 1){
      setValidationError(prev => ({...prev,rating: "invalid input"}))
    }else if(!/[+]?([0-4]*\.[0-9]+|[0-5])/.test(value)){
      setValidationError(prev => ({...prev,rating: "value should be between 0 - 5"}))
    }
  }

  React.useEffect(() => {
    if(actionData?.success){
      toast.success("Reviewed Successfully",{
        position: "top-right"
      })
    }
  },[actionData])

  return (
    <div className='flex flex-col gap-20 overflow-visible'>
        <section className="flex flex-col gap-10 overflow-visible">
        <div className="flex justify-start items-center gap-3">
          <BsPen className="dark:fill-white fill-black h-10 w-10" />
          <h1 className=" font-heading font-medium dark:text-white text-black text-[24px]">Write Review</h1> 
        </div>
        {data.reviews && data.reviews.length < 2  &&
        <form method='post' className="flex flex-col gap-5 items-start overflow-visible">
          <Input  type="text" name="review"  placeholder='Your Review' label="Review" handleChange={handleReviewChange} error={validationError.review} style={lessRoundedBasicInput} />
          <Input  type="text" name="rating"  placeholder='Rating 0 to 5' label="Rating" handleChange={handleRatingChange} error={validationError.rating} style={lessRoundedBasicInput} />
          <button disabled={transition.state === "submitting" || validationError.review ? true : false  || validationError.rating  ? true : false} type="submit" className={`${lessRoundedBasicLargeButtonFull}`}>{transition.state === "submitting" ? "Posting..." : "Post"}</button>
        </form>}
        </section>
        <section>
          
        </section>
    </div>
  )
}

export default Review