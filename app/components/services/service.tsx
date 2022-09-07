import React from 'react'
import { borderGrowAnim } from '~/utils/styles'
import { isHomePage } from '~/utils/helpers/IsHomePage'
import { Link, useLocation } from '@remix-run/react'
import { Service as ServiceType } from '~/sanity/types'

type serviceProps = {
  service: ServiceType,
  delay: number
}

const Service : React.FC<serviceProps> = ({service,delay}) => {

  const location = useLocation()

  return (
    <Link to={isHomePage(location.pathname) ? `/services#service-${service.id}` : `/pricing/${service.id}`} className={`relative ${isHomePage(location.pathname) ? "lg:h-64 lg:min-w-[256px] lg:w-64 min-w-[280px] h-64 w-[280px] flex-col justify-center items-center rounded-md" : `lg:h-64 lg:min-w-[256px] min-w-full h-40 w-full lg:w-64 flex-col justify-center items-center rounded-md`} dark:bg-gray-800 bg-slate-100 p-3 gap-2 flex flex-row items-cente hover:scale-110 relative z-10 overflow-visible ${borderGrowAnim} animate-fade-in-fwd animation-delay-${delay}`}>
      <section className='absolute top-0 left-0 right-0 bottom-0 flex justify-center opacity-100 items-center overflow-hidden rounded-md'>
          <img className='h-full w-full z-10' src={service.image.imageUrl} />
          <span className='absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.2)] z-20'></span>
      </section>
      <section className='dark:text-white text-black w-full justify-center items-center flex flex-col gap-[3px] opacity-100 z-30'>
        <p className={`font-heading font-semibold text-white text-center  ${isHomePage(location.pathname) ? "text-[24px]" : "text-[20px]"}`}>{service.name}</p>
      </section>
    </Link>
  )
}

export default Service