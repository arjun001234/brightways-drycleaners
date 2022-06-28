import React from 'react'
import { Service } from '~/types/types'

type DetailedServiceProps = {
    service: Service
}

const DeatailedService : React.FC<DetailedServiceProps> = ({service}) => {



  return (
    <div  className={`flex flex-col-reverse md:flex-row md:even:flex-row-reverse items-center gap-20 overflow-visible odd:animate-bounce-in-right even:animate-bounce-in-left`}>
        <section className='flex-1 flex flex-col gap-3 overflow-visible'>
            <h1 className='font-heading font-bold text-[24px] dark:text-white text-black overflow-visible'>{service.name}</h1>
            <p className='font-text font-medium text-gray-400 text-[18px] overflow-visible'>{service.detailedDesc}</p>
        </section>
        <section className='flex-1 flex flex-row'>

        </section>
    </div>
  )
}

export default DeatailedService