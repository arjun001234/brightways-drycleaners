import React from 'react'
import { Service as ServiceType } from '~/types/types'
import Service from './service'

type containerProps = {
    services: ServiceType[]
}

const Container : React.FC<containerProps> = ({services}) => {



  return (
    // <section className={``}>
      <div className='flex flex-row justify-center gap-5 overflow-visible w-[100%] lg:w-[80%] flex-wrap col-start-1 col-span-full row-start-1 justify-self-center'>
      {services.map((service,index)  => {
            return <Service key={service._id} delay={(index+1)*100} service={service} />
        })}
      </div>
    // </section>
  )
}

export default Container