import React from 'react'
import { useCountUp } from 'react-countup';
import useInView from '~/hooks/useInView';
import { Metric } from '~/types/types';

type metricProps = {
    data: Metric
}

const Metric : React.FC<metricProps> = ({data}) => {

  const {ref,inView} = useInView({threshold: 0.2})
  const {start} = useCountUp({
    ref: ref,
    start: 0,
    end: data.value,
    duration: 1,
  })

  React.useEffect(() => {
    if (inView){
      start()
    }
  },[inView])

  return (
    <div className='justify-self-center  self-center flex flex-col gap-5 items-center'>
      <section className='rounded-[50%] w-[200px] h-[200px] border-[3px] border-primary flex justify-center gap-1 items-center'>
        <span ref={ref} className=" text-[48px] font-bold text-black dark:text-white font-heading " />
        <span className=' text-[48px] font-bold text-black dark:text-white font-heading '>{data.suffix}</span>
      </section>
      <p className='text-center font-heading font-bold text-[24px] text-black dark:text-white'>{data.name}</p>
    </div>
  )
}

export default Metric