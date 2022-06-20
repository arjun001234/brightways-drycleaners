import React from 'react'
import { Service as ServiceType } from '~/types/types'
import Service from './service'

type containerProps = {
    services: ServiceType[]
}

const Container : React.FC<containerProps> = ({services}) => {
  return (
    <section className='flex flex-col gap-5 overflow-visible'>
        {services.map((service,index)  => {
            return <Service key={service._id} index={index} service={service}  />
        })}
    </section>
  )
}

export default Container