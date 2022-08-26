import React from 'react'

const Content = () => {
  return (
    <div className='flex flex-col p-5 bg-slate-100 dark:bg-gray-800 rounded-lg gap-6 min-h-[400px] min-w-[600px]'>
      <section className='flex flex-col gap-2'>
        <h2 className='font-heading font-semibold text-[24px] text-black dark:text-white'>Heading</h2>
        <span>Rating</span>
      </section>
      <section>
        <p className='font-text font-medium text-[16px] text-gray-400'>Content</p>
      </section>
    </div>
  )
}

export default Content