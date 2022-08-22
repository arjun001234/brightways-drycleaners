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
  
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
     if(containerRef.current){
      containerRef.current.scrollIntoView()
     }
  },[containerRef])

  if(!service) {
    return <div>Not Found</div>
  }

  return (
    <div ref={containerRef} className='flex flex-col w-full lg:w-[500px] justify-center lg:justify-start min-h-[calc(100vh - 50px)]  lg:min-h-[auto] lg:h-auto gap-2 bg-white dark:bg-slate-900 p-10 mx-auto'>
        {categories.length === 0 ? <p className='font-text font-[24px] w-full text-center text-black dark:text-white'>Price currently unavailable</p> :
        <section className='flex flex-col gap-8 mt-5'>
            {categories.map((category) => {
                return <Category key={category._id} category={category} />
            })}
        </section>}
        <section className='flex flex-col gap-2 mt-5'>
          <p className='font-heading text-[18px] dark:text-white text-black'>Note</p>
          <p className='font-heading text-[16px] text-gray-400'>Final price of the article will be decided at the time of billing</p>
        </section>
    </div>
  )
}

export default Service