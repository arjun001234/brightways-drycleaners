import React from 'react'
import { Service as ServiceType } from '~/types/types'
import Image from '../../../public/images/dry-cleaning.png'
import { borderGrowAnim } from '~/utils/styles'
import { isHomePage } from '~/utils/helpers/IsHomePage'
import { Link, useLocation } from '@remix-run/react'

type serviceProps = {
  service: ServiceType,
  index: number
}

const Service : React.FC<serviceProps> = ({service}) => {

  const location = useLocation()

  return (
    <Link to={`/pricing/${service.name}`} className={`md:w-80 ${isHomePage(location.pathname) ? "h-64 w-64 flex-col justify-center items-center" : "h-24 w-full flex-row"} dark:bg-gray-800 bg-gray-50 p-3 gap-2 rounded-md flex flex-row items-cente hover:scale-110 relative z-10 overflow-visible ${borderGrowAnim}`}>
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