import React from 'react'
import { MdErrorOutline } from 'react-icons/md'
import { GiConfirmed } from 'react-icons/gi'
import { CgInfo } from 'react-icons/cg'

type notificationProps = {
    type: "ERROR" | "SUCCESS" | "INFO"
    message?: string
}

const Notification : React.FC<notificationProps> = ({type,message}) => {

    const containerRef = React.useRef<HTMLElement | null>(null);


    React.useEffect(() => {
       if(containerRef.current){
        containerRef.current.scrollIntoView();
       }
    },[type,message,containerRef])

    // React.useEffect(() => {
    //     const timeout = setTimeout(() => {
            
    //     },5000)
    // })

    if(!message){
        return null;
    }

    return (
    <section ref={containerRef} className='w-full h-auto flex justify-center items-center my-5'>
    <div className={`w-fit max-w-md min-w-fit h-auto px-5 py-4 flex items-center justify-between border-4 rounded-md ${type === "ERROR" ? "border-error-red" : type === "SUCCESS" ? "border-success-green" : "border-blue" } gap-5`}>
        {type == "ERROR" && <MdErrorOutline className={`h-10 w-10 text-error-red`} />}
        {type === "SUCCESS" && <GiConfirmed className={`h-10 w-10 text-success-green`} />}
        {type === "INFO" && <CgInfo className={`h-10 w-10 text-blue`} />}
        <p className='font-text font-medium text-[18px] text-dark dark:text-white'>{message}</p>
    </div>
    </section>
  )
}

export default Notification