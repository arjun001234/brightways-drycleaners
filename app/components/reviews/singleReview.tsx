import React from "react"
import { Review } from "~/sanity/types"
import { BsChatLeftQuote, BsFillStarFill } from "react-icons/bs"

type SingleReviewsProps = {
    review: Review
}

const SingleReview : React.FC<SingleReviewsProps> = ({review}) => {

  return (
    <div className="min-w-[300px] w-[300px] min-h-[350px] h-[350px] items-center p-4 gap-5 border-2 border-gray-400 hover:border-primary hover:translate-y-3 transition duration-500 delay-100 bg-white rounded-lg flex flex-col justify-between ">
          <section className="flex flex-row  items-center justify-between w-full">
            <div>
              <BsChatLeftQuote className="text-primary h-10 w-10" />
            </div>
            <div className="flex flex-row items-center gap-2">
              <p className="font-heading text-lg font-bold pt-[4px]">{review.rating}</p>
              <BsFillStarFill className="text-primary fill-primary h-5 w-5" />
            </div>
          </section>
          <section className="flex flex-1 flex-col justify-center items-center gap-2">
            <h2 className="font-heading font-bold text-lg">{review.heading}</h2>
            <p className="font-text font-medium text-base text-center">{review.content}</p>
          </section>
           {/* <p className={`${!isHomePage(location.pathname) ? "min-h-auto h-auto" : "min-h-[100px] h-[100px] mb-3"} text-[14px] dark:text-white text-black font-text font-semibold`}>"sss"</p> */}
           <section className="flex flex-row  items-center justify-between w-full">
            <div className="h-10 w-10 rounded-[50%]">
              <img loading="lazy" className="w-full h-full rounded-[50%]" src={review.image.imageUrl} alt={review.image.alt} />
            </div>
            <div className="flex flex-col justify-center items-left">
              <p className="font-heading font-bold text-md">{review.name}</p>
              <p className="font-text font-normal text-sm">{review.location}</p>
            </div>
            </section>
           {/* <p className="text-[16px] text-gray-400 font-text font-extrabold">{review.name}</p> */}
    </div>
  )
}

export default SingleReview