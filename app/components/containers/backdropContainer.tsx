import { Link,useLocation,useNavigate } from '@remix-run/react';
import React from 'react';
import { CgClose } from 'react-icons/cg';

type BackdropContainerProps = {
  to?: string
  handleClose?: () => void,
  heading: string
}

const BackdropContainer : React.FC<BackdropContainerProps> = ({children,to,handleClose,heading}) => {

  const nav = useNavigate();

  return (
    <div className='fixed bg-[rgba(0,0,0,0.5)] top-0 left-0 right-0 bottom-0 z-50 overflow-y-auto py-0 lg:py-[100px] h-screen no-scrollbar animate-fade-in-bck '>
        <section className='w-full h-full lg:h-auto lg:w-[500px] mx-auto p-5 px-5 lg:px-10 bg-white dark:bg-slate-900 flex items-center justify-between'>
            <h1 className='font-heading font-bold text-[24px] text-black dark:text-white'>{heading}</h1>
            {to && <CgClose className='h-[30px] w-[30px] text-black dark:text-white' onClick={() => nav(-1)} />}
            {handleClose && <CgClose onClick={handleClose.bind(null)} className='h-[30px] w-[30px] text-black dark:text-white' />}
        </section>
        <div className="w-full h-full lg:h-auto lg:w-[500px] flex mx-auto p-5 pt-0 lg:pt-0 lg:p-10 bg-white dark:bg-slate-900">
          {children}
        </div>
    </div>
  )
}

export default BackdropContainer 