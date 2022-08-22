import { useTransition } from '@remix-run/react'

const PageLoader = () => {

  const transition = useTransition()

  return (
    <div className={`fixed bottom-5 ${transition.state === "loading" ? "right-5" : "right-[100%]"} flex flex-row gap-5 p-5 rounded-md dark:bg-gray-800 bg-slate-100 z-50 h-auto w-auto justify-center items-center`}>
        <div className=" inline-block w-[50px] h-[50px] after:contents-[''] after:block after:h-[40px] after:w-[40px] after:m-[5px] after:rounded-[50%] after:border-2 after:border-t-primary after:animate-spin overflow-visible" ></div>
        <p className='font-text font-medium text-[16px] dark:text-white text-black'>{transition.location?.pathname}</p>
    </div>
  )
}

export default PageLoader