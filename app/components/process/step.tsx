import React from 'react';
import {motion} from 'framer-motion'
import { FadeOutScaleUpAnim } from '~/utils/animations/basicAnim';
import { Step } from '~/sanity/types';

type StepProps = {
    step: Step,
    delay: number
}

const Step : React.FC<StepProps> = ({step,delay}) => {

  return (
    <motion.section variants={FadeOutScaleUpAnim} initial="hidden" whileInView="visible" custom={delay} viewport={{once: true}}  className={`flex basis-2/6 flex-col flex-1 gap-5 h-auto items-center overflow-visible`} >
        <div className='h-24 w-24 rounded-[50%] bg-inherit flex justify-center items-center'>
          <img className='h-full w-full' alt={step.heading} src={step.image.imageUrl} />
        </div>
        <div className='flex flex-col gap-2 h-auto w-[80%]'>         
        <h1 className='font-heading text-white text-[20px] font-bold text-center'>{step.heading}</h1>
        <p className='font-text text-[16px] font-normal text-white text-center'>{step.desc}</p>
        </div>
    </motion.section>
  )
} 
export default Step