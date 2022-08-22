
import { useLoaderData } from '@remix-run/react'
import { ServicesPageData } from '~/types/types'
import DeatailedService from './detailedService'

const DetailedServices = () => {

  const {services} = useLoaderData() as ServicesPageData

  return (
    <div className={`grid grid-cols-1 w-full h-auto gap-10 lg:gap-40 overflow-visible col-start-1 col-span-full`}>
       {services.map((service) => {
        return <DeatailedService key={service._id} service={service} />
       })}
    </div>
  )
}

export default DetailedServices