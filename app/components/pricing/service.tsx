import { useLoaderData } from '@remix-run/react'
import React from 'react'
import { ExtendedCategory } from '~/routes/pricing/$service'
import { Service as serviceType } from '~/types/types'
import Category from './category'

type ServiceProps = {
  service: serviceType | undefined
}

const Service : React.FC<ServiceProps> = ({service}) => {

  const {categories} = useLoaderData<{categories: ExtendedCategory[]}>()

  if(!service) {
    return <div>Not Found</div>
  }

  return (
    <div className='flex flex-col flex-1 w-auto h-auto gap-2'>
        <h2 className='font-heading text-[32px] dark:text-white text-black font-semibold'>{service.name}</h2>
        <p className='font-text text-[16px] dark:text-white text-black'>{service.detailedDesc}</p>
        <section className='flex flex-col gap-8 mt-5'>
            {categories.map((category) => {
                return <Category key={category._id} category={category} />
            })}
        </section>
    </div>
  )
}

export default Service