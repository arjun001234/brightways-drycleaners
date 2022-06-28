import React from 'react'
import { Store } from '~/types/types'
import {FaRegAddressBook, FaRegCalendarAlt} from 'react-icons/fa'
import {BiTime} from 'react-icons/bi'
import {FiPhoneCall} from 'react-icons/fi'
import { basicButton } from '~/utils/styles'
import { motion } from 'framer-motion'

type storeProps = {
    store: Store
    delay: number
}

const Store : React.FC<storeProps> = ({store,delay}) => {
  return (
    <div className={`flex flex-col dark:bg-gray-800 bg-gray-50 p-5 gap-2 rounded-lg hover:shadow-lg transition-all duration-500 hover:-translate-y-2 overflow-visible odd:animate-bounce-in-left even:animate-bounce-in-right`}>
        <h1 className='font-heading font-semibold dark:text-white text-black text-[24px] mb-5'>{store.name}</h1>
        <section className='flex items-center dark:text-white text-black gap-2 font-text text-[14px]'>
            <FaRegAddressBook />
            <p>{store.address}</p> 
        </section>
        <section className='flex items-center dark:text-white text-black gap-2 font-text text-[14px]'>
            <FaRegCalendarAlt />
            <p>{store.openOn}</p>
        </section>
        <section className='flex items-center dark:text-white text-black gap-2 font-text text-[14px]'>
            <BiTime />
            <p>{store.timings}</p>
        </section>
        <section className='flex items-center dark:text-white text-black gap-2 font-text text-[14px]'>
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