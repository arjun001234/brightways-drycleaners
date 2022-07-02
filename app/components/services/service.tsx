import React from 'react'
import { Service as ServiceType } from '~/types/types'
import Image from '../../../public/images/dry-cleaning.png'
import { borderGrowAnim } from '~/utils/styles'
import { isHomePage } from '~/utils/helpers/IsHomePage'
import { Link, useLocation } from '@remix-run/react'

type serviceProps = {
  service: ServiceType,
  delay: number
}

const Service : React.FC<serviceProps> = ({service,delay}) => {

  const location = useLocation()

  return (
    <Link to={`/pricing/${service.name}`} className={`${isHomePage(location.pathname) ? "lg:h-60 h-40 w-full lg:w-60 flex-col justify-center items-center" : `h-24 w-full flex-row`} dark:bg-gray-800 bg-slate-100 p-3 gap-2 rounded-md flex flex-row items-cente hover:scale-110 relative z-10 overflow-visible ${borderGrowAnim} animate-fade-in-fwd animation-delay-${delay}`}>
      <section className='flex justify-center opacity-100 items-center overflow-hidden h-[50px] w-[50px]'>
          <img className=' h-full w-full' src={Image} />
      </section>
      <section className='dark:text-white text-black flex flex-col gap-[3px] opacity-100'>
        <p>{service.name}</p>
        {/* <p>{service.shortDesc}</p> */}
      </section>
    </Link>
  )
}

export default Service