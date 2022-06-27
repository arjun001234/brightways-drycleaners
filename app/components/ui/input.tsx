import React, { HTMLInputTypeAttribute } from 'react'
import { lessRoundedBasicInput } from '~/utils/styles'

export type inputProps = {
   type: React.HTMLInputTypeAttribute,
   label: string,
   name: string,
   placeholder: string,
   error : string | undefined
   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
   defaultValue?: string,
   disabled?: boolean,
   style: string
}

const Input : React.FC<inputProps> = ({label,type,placeholder,name,error,handleChange,defaultValue = "",disabled = false,style}) => {
  return (
    <div className={`w-full flex flex-col gap-2`}>
        <label className='font-text font-normal text-[16px] dark:text-white text-black' htmlFor={name}>{label}</label>
        <input className={style} onChange={handleChange.bind(null)} type={type} placeholder={placeholder} name={name} defaultValue={defaultValue} disabled={disabled} />
        {error && <p className=' text-[#FF0000]'>{error}</p>}
    </div>
  )
}

export default Input