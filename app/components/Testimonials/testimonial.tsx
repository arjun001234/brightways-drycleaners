import React from "react"
import { testimonialsType } from "~/types/types"

type testimonialsProps = {
    testimonial: testimonialsType
}

const Testimonial : React.FC<testimonialsProps> = ({testimonial}) => {

  return (
    <div className={`hover:shadow-lg hover:translate-y-3 transition duration-500 delay-100 min-w-[250px] w-[250px] min-h-[250px] h-[250px] dark:bg-gray-800 bg-gray-100 rounded-lg flex flex-col items-center justify-center p-4`}>
           <p className='text-[14px] dark:text-white text-black font-text font-semibold mb-3 min-h-[100px] h-[100px]'>"{testimonial.review}"</p>
           <p className="text-[16px] text-gray-400 font-text font-extrabold">{testimonial.name}</p>
           {/* <p className='text-text-gray text-[14px] font-normal'>{testimonial.source}</p> */}
           {/* <a href={`/reviews/${testimonial.id}`}>Read Full Review</a> */}
    </div>
  )
}

export default Testimonial