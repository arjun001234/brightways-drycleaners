import React from 'react'

const Banner = () => {
  return (
    <div className='flex p-5 bg-slate-100 dark:bg-gray-800 rounded-md gap-3 items-center'>
      <section>
        <img className=' h-14 w-14 rounded-[50%]' />
      </section>
      <section className='flex flex-col gap-1'>
        <p className=' font-heading font-medium text-[18px] text-black dark:text-white'>Name</p>
        <p className=' font-text font-medium text-[16px] text-gray-400'>Location</p>
      </section>
    </div>
  )
}

export default Banner