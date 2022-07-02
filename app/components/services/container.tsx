import React from 'react'
import { Service as ServiceType } from '~/types/types'
import Service from './service'
import {motion} from 'framer-motion';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

type containerProps = {
    services: ServiceType[]
    open: boolean
}

const Container : React.FC<containerProps> = ({services,open}) => {

  return (
    <section className={`absolute min-h-screen overflow-y-scroll h-auto left-0 ${open ? 'top-[100px]' : 'top-[-100%]'} w-full flex justify-center py-[50px] lg:py-0 lg:static lg:overflow-visible lg:col-start-1 lg:col-span-4 lg:w-auto lg:h-auto dark:bg-slate-900 bg-white transition-all duration-500 ease-linear z-20`}>
      <div className='flex flex-col gap-5 overflow-visible w-[80%] lg:w-full'>
      {services.map((service,index)  => {
            return <Service key={service._id} delay={(index+1)*100} service={service} />
        })}
      </div>
    </section>
  )
}

export default Container