import React from 'react'
import useInView from '~/hooks/useInView'
import CountUp from 'react-countup'
import Metric from './metric'

const Metrics = () => {

  return (
    <div className=' px-5 py-20 bg-blue flex flex-col justify-center items-center gap-10 w-full'>
        <h1 className=' font-heading text-[32px] font-bold text-white '>Metrics</h1>
        <section className='flex gap-10 flex-col flex-wrap md:flex-row justify-center items-center'>
            <Metric />
            <Metric />
            <Metric />
            <Metric />
        </section>
    </div>
  )
}

export default Metrics