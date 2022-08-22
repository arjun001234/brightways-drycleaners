import React from 'react'
import { VscInfo } from 'react-icons/vsc'
import { definitions } from '~/supabase'

type selectInputProps = {
   options: definitions['bookings']['time_slot'][]
   label: string,
   name: string,
   error : string | undefined
   handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
   disabled?: boolean,
   style: string,
   info?: string
}

const SelectInput = React.forwardRef<HTMLSelectElement | null,selectInputProps>(({label,name,error,handleChange,disabled = false,style,info,options},ref) => (
    <div className={`w-full flex flex-col gap-2`}>
          <section className='flex gap-2 justify-start items-center'>
            <label className='font-text text-[16px] font-medium dark:text-white text-black' htmlFor={name}>{label}</label>
            {info && <span title={info} className='flex justify-center items-center'>
              <VscInfo className='h-5 w-5' />
              </span>}
          </section>
          <select ref={ref} name={name} className={`${style}`} disabled={disabled} onChange={handleChange.bind(null)}>
            {options.map((ops) => {
                return <option value={ops}>{ops}</option>
            })}
          </select>
          {error && <p className=' text-[#FF0000]'>{error}</p>}
    </div>
  ))

export default SelectInput