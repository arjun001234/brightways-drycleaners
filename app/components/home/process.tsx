import { Link, useLoaderData } from '@remix-run/react'
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
    <InfoWrapper heading="How it's works" subHeading='hdhhdshbsdjbasj' id="process">
      <div className={`flex flex-col lg:flex-row h-auto lg:h-[300px] gap-10 w-full relative lg:pt-[50px] col-start-1 col-span-full`}>
            {process.steps.map((step,index) => {
               return <Step step={step} key={step._key} delay={(index+2)/10} />
            })}
      </div>
      <section className='col-start-1 col-span-full overflow-visible h-auto flex justify-center items-start py-[50px] lg:py-0'>
    <button className={`${largeBasicButton}`}><Link to="/process">Learn More</Link></button>
    </section>
    </InfoWrapper> 
  )
}

export default Process 