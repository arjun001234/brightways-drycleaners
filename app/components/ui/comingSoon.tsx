import React from 'react'
import { GrHostMaintenance } from 'react-icons/gr'

const ComingSoon = () => {
  return (
    <div className='h-screen w-screen flex flex-col gap-10 justify-center items-center bg:white'>
         <GrHostMaintenance className='h-[100px] w-[100px]' />
         <h1 className='font-heading text-[36px] font-bold text-primary'>Under Maintenance</h1>
    </div>
  )
}

export default ComingSoon