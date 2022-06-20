import React from 'react';
import { Step } from '~/types/types';
import {motion} from 'framer-motion'
import { scaleAnim } from '~/utils/animations/basicAnim';

type StepProps = {
    step: Step,
}

const Step : React.FC<StepProps> = ({step}) => {

  return (
    <motion.section variants={scaleAnim} initial="hidden" whileInView="visible"  viewport={{once: true}} className={`flex flex-1 gap-3 flex-col items-center justify-center`} >
        <div className=' h-24 w-24 rounded-[50%] bg-blue flex justify-center items-center'>
          <img />
        </div>
        <h1 className='font-heading text-black dark:text-white text-[20px] font-bold'>{step.heading}</h1>
        {/* <p className='font-text text-[14px] font-normal'>{step.desc}</p> */}
    </motion.section>
  )
} 
export default Step