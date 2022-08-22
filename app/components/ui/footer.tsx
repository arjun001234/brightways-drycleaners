import { useLoaderData } from "@remix-run/react";
import {LayoutPageData} from "~/types/types";
import { Logo } from "./logo";

const Footer = () => {

  const {footer} = useLoaderData<LayoutPageData>()

  return (
    <div className='w-full bg-inherit flex justify-center items-center mx-auto px-[20px] md:px-[100px] h-auto gap-10 py-[100px] border-t-2 border-gray-400'>
       <main className='w-[100%] gap-10 grid grid-cols-1 md:grid-cols-4 '>
       <section className='flex flex-col items-start gap-3 font-[14px]  dark:text-white text-black font-text'>
          <Logo />
          <p>{footer.desc}</p>
       </section>
           {footer.sections.map((section) => {
               return <section key={section._key} className='flex flex-col items-start gap-3'>
                   <p className='text-[18px] font-normal font-heading text-primary'>{section.name}</p>
                   {section.links.map(link => {
                       return <a className="text-[18px] font-text text-black dark:text-white" key={link._key} href={link.to}>{link.name}</a>
                   })}
               </section>
           })}
       </main>
    </div>
  )
}

export default Footer