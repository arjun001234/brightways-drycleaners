import React from 'react'
import { useCountUp } from 'react-countup';
import useInView from '~/hooks/useInView';

type metricProps = {

}

const Metric = () => {

  const {ref,inView} = useInView({threshold: 0.2})
  const {start,reset} = useCountUp({
    ref: ref,
    start: 0,
    end: 1000,
    duration: 1,
  })

  React.useEffect(() => {
    if (inView){
      start()
    }
  },[inView])

  return (
    <div>
      <section className=' rounded-[50%] w-[200px] h-[200px] border-4 border-white flex justify-center items-center'>
        <span ref={ref} className="font-sub-heading text-[24px] font-bold text-white " />
      </section>
      <p></p>
    </div>
  )
}

export default Metric