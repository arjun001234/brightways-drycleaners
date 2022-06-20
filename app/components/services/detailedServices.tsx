
import { useLoaderData } from '@remix-run/react'
import { ServicesPageData } from '~/types/types'
import DeatailedService from './detailedService'

const DetailedServices = () => {

  const {services} = useLoaderData() as ServicesPageData

  return (
    <div className={`grid grid-cols-1 w-full h-auto gap-40 overflow-y-visible`}>
       {services.map((service) => {
        return <DeatailedService key={service._id} service={service} />
       })}
    </div>
  )
}

export default DetailedServices