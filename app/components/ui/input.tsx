import React, { HTMLInputTypeAttribute } from 'react'
import { lessRoundedBasicInput } from '~/utils/styles'

type inputProps = {
   type: string,
   label: HTMLInputTypeAttribute,
   name: string,
   placeholder: string,
   error : string | undefined
   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input : React.FC<inputProps> = ({label,type,placeholder,name,error,handleChange}) => {
  return (
    <div className={`w-full flex flex-col gap-2`}>
        <label className='font-text font-normal text-[16px] dark:text-white text-black' htmlFor={name}>{label}</label>
        <input className={`${lessRoundedBasicInput}`} onChange={handleChange.bind(null)} type={type} placeholder={placeholder} name={name} />
        {error && <p className=' text-[#FF0000]'>{error}</p>}
    </div>
  )
}

export default Input