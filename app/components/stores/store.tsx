import React from 'react'
import {FaRegAddressBook, FaRegCalendarAlt} from 'react-icons/fa'
import {BiTime} from 'react-icons/bi'
import {FiPhoneCall} from 'react-icons/fi'
import { basicButton } from '~/utils/styles'
import { Store } from '~/sanity/types'

type storeProps = {
    store: Store
    delay: number
}

const Store : React.FC<storeProps> = ({store}) => {
  return (
    <div className={`relative flex flex-col h-auto dark:bg-gray-800 bg-gray-50 border-[3px] p-5 gap-2 rounded-lg hover:shadow-lg transition-all duration-500 hover:-translate-y-2 overflow-visible odd:animate-bounce-in-left even:animate-bounce-in-right`}>
        {/* <section className='absolute top-0 left-0 right-0 bottom-0 z-[-1]'>
           <span className='h-full w-full bg-primary opacity-70 absolute z-20'></span>
           <img src={storePic} className="h-full w-full z-0" />
        </section> */}
        <h1 className='font-heading font-semibold text-black dark:text-white text-[24px] mb-5'>{store.name}</h1>
        <section className='flex items-center text-black dark:text-white gap-2 font-text text-[14px]'>
            <FaRegAddressBook />
            <p>{store.address}</p> 
        </section>
        <section className='flex items-center text-black dark:text-white gap-2 font-text text-[14px]'>
            <FaRegCalendarAlt />
            <p>{store.openOn}</p>
        </section>
        <section className='flex items-center text-black dark:text-white gap-2 font-text text-[14px]'>
            <BiTime />
            <p>{store.timings}</p>
        </section>
        <section className='flex items-center text-black dark:text-white gap-2 font-text text-[14px]'>
            <FiPhoneCall />
            <p>{store.contactNumber}</p>
        </section>
        <section className='flex flex-col md:flex-row items-center gap-5 font-text text-[14px] mt-5 overflow-visible'>
            <button className={`${basicButton}`}><a href={store.direction} target="_blank">Get Direction</a></button>
            <button className={`${basicButton}`}><a href={`tel:+91${store.contactNumber}`}>Call</a></button>
        </section>
    </div>
  )
}

export default Store