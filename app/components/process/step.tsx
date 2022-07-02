import React from 'react';
import { Step } from '~/types/types';
import {motion} from 'framer-motion'
import { scaleAnim } from '~/utils/animations/basicAnim';

type StepProps = {
    step: Step,
}

const Step : React.FC<StepProps> = ({step}) => {

  return (
    <motion.section variants={scaleAnim} initial="hidden" whileInView="visible"  viewport={{once: true}} className={`flex flex-1 flex-col gap-3 items-center overflow-visible`} >
        <div className=' h-24 w-24 rounded-[50%] bg-slate-100 flex justify-center items-center'>
          <img className='h-10 w-10' alt={step.heading} src={step.image.imageUrl} />
        </div>
        <h1 className='font-heading text-black dark:text-white text-[20px] font-bold place text-center'>{step.heading}</h1>
        {/* <p className='font-text text-[14px] font-normal'>{step.desc}</p> */}
    </motion.section>
  )
} 
export default Step