import React from "react"
import { FadeOutScaleUpAnim } from "~/utils/animations/basicAnim"
import { motion } from 'framer-motion'
import { isHomePage } from "~/utils/helpers/IsHomePage"
import { useLocation } from "@remix-run/react"
import { Review } from "~/sanity/types"

type testimonialsProps = {
    testimonial: Review
    delay: number
}

const Testimonial : React.FC<testimonialsProps> = ({testimonial,delay}) => {

  const location = useLocation()

  return (
    <motion.div variants={FadeOutScaleUpAnim} initial="hidden" whileInView="visible" custom={delay} viewport={{once: true}} className={`${!isHomePage(location.pathname) ? "w-full min-w-full min-h-auto h-auto p-6 items-start gap-5" : 'min-w-[250px] w-[250px] min-h-[250px] h-[250px] items-center p-4 gap-0'} hover:shadow-lg hover:translate-y-3 transition duration-500 delay-100 dark:bg-gray-800 bg-gray-100 rounded-lg flex flex-col justify-center`}>
           <p className={`${!isHomePage(location.pathname) ? "min-h-auto h-auto" : "min-h-[100px] h-[100px] mb-3"} text-[14px] dark:text-white text-black font-text font-semibold`}>"sss"</p>
           <p className="text-[16px] text-gray-400 font-text font-extrabold">{testimonial.name}</p>
    </motion.div>
  )
}

export default Testimonial