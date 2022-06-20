import { useLoaderData } from '@remix-run/react'
import { motion } from 'framer-motion'
import React from 'react'
import { IndexPageData } from '~/types/types'
import { fade } from '~/utils/animations/basicAnim'
import { largeBasicButton } from '~/utils/styles'
import Step from '../process/step'
import InfoWrapper from '../wrappers/infoWrapper'

const Process : React.FC = () => {

    const {process} = useLoaderData<IndexPageData>()

  return (
      <InfoWrapper heading="How it's works" subHeading='hdhhdshbsdjbasj'>
      <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{once: true}}  transition={{staggerChildren: 0.5}} className={`flex flex-col sm:flex-row gap-10 w-full relative md:py-[50px]`}>
            {process.steps.map((step) => {
               return <Step step={step} key={step._key} />
            })}
      </motion.div>
      <button className={`${largeBasicButton}`}>Learn More</button>
      </InfoWrapper> 
  )
}

export default Process 