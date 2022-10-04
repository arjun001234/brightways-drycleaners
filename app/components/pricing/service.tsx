import { useLoaderData } from '@remix-run/react'
import React from 'react'
import { ExtendedCategory } from '~/routes/pricing/$service'
import { Service as serviceType } from '~/sanity/types'
import Category from './category'

type ServiceProps = {
  service: serviceType | undefined
}

const Service : React.FC<ServiceProps> = ({service}) => {

  const {categories} = useLoaderData<{categories: ExtendedCategory[]}>()
  
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
     if(containerRef.current){
      containerRef.current.scrollIntoView()
     }
  },[containerRef])

  if(!service) {
    return <div className='font-text text-xl text-gray-700 dark:text-gray-400 text-center py-5'>Not Found</div>
  }

  return (
    <div ref={containerRef} className='flex flex-col w-full justify-center lg:justify-start h-auto gap-2 bg-white dark:bg-slate-900 lg:p-10 mx-auto p-0'>
        {categories.length === 0 ? <p className='font-text font-[24px] w-full text-center text-black dark:text-white'>Price currently unavailable</p> :
        <section className='flex flex-col gap-8 mt-5'>
            {categories.map((category) => {
                return <Category key={category._id} category={category} />
            })}
        </section>}
        <section className='flex flex-col gap-2 mt-5 px-5 lg:p-0'>
          <p className='font-heading text-[18px] dark:text-white text-black'>Note</p>
          <ol className=' list-decimal flex flex-col gap-1'>
          <li className='font-heading text-base dark:text-gray-400 text-gray-700 leading-6'>Actual dry cleaning prices may vary depending on the actual garment(depending on fabric, texture, embellishments, level of embroidery or similar work, etc..)</li>
          <li className='font-heading text-base dark:text-gray-400 text-gray-700 leading-6'>Minimum order value of 350 for free pickup and delivery.</li>
          </ol>
        </section>
    </div>
  )
}

export default Service