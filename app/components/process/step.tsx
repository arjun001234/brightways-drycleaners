import React from 'react';
import { Step } from '~/types/types';
import {motion} from 'framer-motion'
import { FadeOutScaleUpAnim } from '~/utils/animations/basicAnim';
import { useLocation } from '@remix-run/react';

type StepProps = {
    step: Step,
    delay: number
}

const Step : React.FC<StepProps> = ({step,delay}) => {

  const location = useLocation()

  return (
    <motion.section variants={FadeOutScaleUpAnim} initial="hidden" whileInView="visible" custom={delay} viewport={{once: true}}  className={`flex flex-col flex-1 gap-5 h-auto items-center overflow-visible`} >
        <div className='h-24 w-24 rounded-[50%] bg-white flex justify-center items-center'>
          <img className='h-10 w-10' alt={step.heading} src={step.image.imageUrl} />
        </div>
        <div className='flex flex-col gap-2 h-auto w-[80%]'>         
        <h1 className='font-heading text-white text-[20px] font-bold'>{step.heading}</h1>
        <p className='font-text text-[16px] font-normal text-white'>{step.desc}</p>
        </div>
    </motion.section>
  )
} 
export default Step