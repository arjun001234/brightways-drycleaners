import { Link } from '@remix-run/react'
import { BiError } from 'react-icons/bi'
import { largeBasicButton } from '~/utils/styles'

type ServerErrorProps = {
  status: number;
  message: string;
}

const ServerError : React.FC<ServerErrorProps> = ({status,message}) => {
  return (
    <section className="min-h-screen min-w-full flex bg-white dark:bg-gray-900 justify-center items-center">
        <div className="p-10 min-h-[400px] w-full lg:w-auto h-auto overflow-y-hidden rounded-lg bg-white flex flex-col justify-center gap-3 items-center lg:border-2 lg:border-gray-400">
        {[404].includes(status) ? 
        <>
          <p className='font-heading text-[48px] text-black dark:text-white'>{status}</p>
          <p className="font-heading text-lg mb-3 text-black dark:text-white">{message}</p>
        </> : 
        <>
          <BiError className="fill-error-red h-[100px] w-[100px]" />
          <p className="font-heading text-lg mb-3 text-black dark:text-white">Something went wrong!</p>
        </>}
        <button style={{width: "100%"}} className={`${largeBasicButton} w-full`} onClick={() => location.reload()}>Try Again</button>
        <button style={{width: "100%"}} className={`${largeBasicButton} bg-primary text-white w-full`}><Link to="/">Back to home</Link></button>
        </div>
    </section>
  )
}

export default ServerError