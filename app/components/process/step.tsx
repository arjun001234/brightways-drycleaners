import React from 'react';
import { Step } from '~/types/types';
import {motion} from 'framer-motion'
import { FadeOutScaleUpAnim, scaleAnim } from '~/utils/animations/basicAnim';
import { isHomePage } from '~/utils/helpers/IsHomePage';
import { useLocation } from '@remix-run/react';

type StepProps = {
    step: Step,
    delay: number
}

const Step : React.FC<StepProps> = ({step,delay}) => {

  const location = useLocation()

  return (
    <motion.section variants={FadeOutScaleUpAnim} initial="hidden" whileInView="visible" custom={delay} viewport={{once: true}}  className={` flex flex-1 flex-col gap-3 items-center overflow-visible`} >
        <div className=' h-24 w-24 rounded-[50%] bg-slate-100 flex justify-center items-center'>
          <img className='h-10 w-10' alt={step.heading} src={step.image.imageUrl} />
        </div>
        <h1 className='font-heading text-black dark:text-white text-[20px] font-bold place text-center'>{step.heading}</h1>
        {!isHomePage(location.pathname) && <p className='font-text text-[16px] font-normal text-gray-400'>{step.desc}</p>}
    </motion.section>
  )
} 
export default Step