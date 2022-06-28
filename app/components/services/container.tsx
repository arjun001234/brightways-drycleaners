import React from 'react'
import { Service as ServiceType } from '~/types/types'
import Service from './service'
import {motion} from 'framer-motion';

type containerProps = {
    services: ServiceType[]
}

const Container : React.FC<containerProps> = ({services}) => {
  return (
    <motion.section transition={{staggerChildren: 0.5}} className='flex flex-col gap-5 overflow-visible  col-start-1 col-span-full lg:col-span-4'>
        {services.map((service,index)  => {
            return <Service key={service._id} delay={(index+1)*100} service={service} />
        })}
    </motion.section>
  )
}

export default Container