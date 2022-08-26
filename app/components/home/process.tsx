import { useLoaderData } from '@remix-run/react'
import React from 'react'
import { IndexPageData } from '~/types/types'
import { AppContext } from '../context/appContext'
import Step from '../process/step'
import SectionWrapper from '../wrappers/sectionWrapper'

const Process : React.FC = () => {

  const {process} = useLoaderData<IndexPageData>()

  
  const {isMobile} = React.useContext(AppContext)

  return (
    <SectionWrapper id="process" heading="How it works" bgColor="primary" color="white" darkColor="white" barColor="white">
        <section className='flex flex-wrap gap-y-5 flex-col lg:flex-row h-fit col-start-1 col-span-full'>
            {process.steps.map((step,index) => {
               return <Step step={step} key={step._key}  delay={isMobile ? 0 : (index+2)/10} />
            })}
        </section>
    {/* <section className='col-start-1 col-span-full overflow-visible h-auto flex justify-center items-start py-[50px] lg:pt-[100px]'>
    <button className={`${largeBasicButton}`}><Link to="/process">Learn More</Link></button>
    </section> */}
    </SectionWrapper> 
  )
}

export default Process 