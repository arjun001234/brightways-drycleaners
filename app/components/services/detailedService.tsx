import { Link } from '@remix-run/react'
import React from 'react'
import { Service } from '~/sanity/types'
import { basicButton } from '~/utils/styles'
import ScheduleButton from '../buttons/schedule.button'

type DetailedServiceProps = {
    service: Service
}

const DeatailedService : React.FC<DetailedServiceProps> = ({service}) => {

  return (
    <div id={"service-"+service.id.toString()}  className={`flex flex-col-reverse lg:flex-row lg:even:flex-row-reverse items-center gap-5  lg:gap-20 overflow-visible odd:animate-bounce-in-right even:animate-bounce-in-left border-0 lg:border-2 border-gray-400 px-0 lg:p-5`}>
        <section className='flex-1 flex flex-col gap-3 overflow-visible'>
            <h1 className='font-heading font-bold text-[24px] dark:text-white text-black overflow-visible'>{service.name}</h1>
            <p className='font-text font-medium text-gray-400 text-[18px] overflow-visible'>{service.detailedDesc}</p>
            <div className='flex flex-col lg:flex-row gap-5 py-2 overflow-visible'>
              <button className={basicButton}><Link to={`/pricing/${service.id}`}>View Pricing</Link></button>
              <ScheduleButton content="Book Now" />
            </div>
        </section>
        <section className='flex-1 flex flex-row h-auto w-full lg:min-w-[256px] lg:w-[256px] lg:max-w-[256px] h-[256px]'>
          <img className='h-full w-full z-10 rounded-lg' src={service.image.imageUrl} alt={service.image.alt} />
        </section>
    </div>
  )
}

export default DeatailedService