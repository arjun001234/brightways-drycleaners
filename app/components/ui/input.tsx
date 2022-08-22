import React, { HTMLInputTypeAttribute } from 'react'
import {VscInfo} from 'react-icons/vsc'

export type inputProps = {
   type: React.HTMLInputTypeAttribute,
   label: string,
   name: string,
   placeholder: string,
   error : string | undefined
   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
   defaultValue?: string,
   disabled?: boolean,
   style: string,
   info?: string
}

const Input = React.forwardRef<HTMLInputElement | null,inputProps>(({label,type,placeholder,name,error,handleChange,defaultValue = "",disabled = false,style,info},ref) => (
  <div className={`w-full flex flex-col gap-2`}>
        <section className='flex gap-2 justify-start items-center'>
          <label className='font-text text-[16px] font-medium dark:text-white text-black' htmlFor={name}>{label}</label>
          {info && <span title={info} className='flex justify-center items-center'>
            <VscInfo className='h-5 w-5' />
            </span>}
        </section>
        <input ref={ref}
         className={style} onChange={handleChange.bind(null)} type={type} placeholder={placeholder} name={name} defaultValue={defaultValue} disabled={disabled} />
        {error && <p className=' text-[#FF0000]'>{error}</p>}
  </div>
))

// const Input : React.FC<inputProps> = ({label,type,placeholder,name,error,handleChange,defaultValue = "",disabled = false,style,ref = null}) => {
//   return (
//     <div className={`w-full flex flex-col gap-2`}>
//         <label className='font-text font-normal text-[16px] dark:text-white text-black' htmlFor={name}>{label}</label>
//         <input ref={ref}
//          className={style} onChange={handleChange.bind(null)} type={type} placeholder={placeholder} name={name} defaultValue={defaultValue} disabled={disabled} />
//         {error && <p className=' text-[#FF0000]'>{error}</p>}
//     </div>
//   )
// }

export default Input