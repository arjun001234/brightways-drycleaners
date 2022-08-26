import { useLoaderData } from '@remix-run/react'
import { IndexPageData } from '~/types/types';
import SectionWrapper from '../wrappers/sectionWrapper';

const AboutSection = () => {

  const {business} = useLoaderData<IndexPageData>();

  return (
    <SectionWrapper id="about" heading='About Us' isGrid={false}>
        <section className='h-auto w-full flex flex-col gap-5'>
            <p className='font-text text-lg font-medium text-center text-gray-700 leading-9'>{business.detailedDesc}</p>
        </section>
    </SectionWrapper>
  )
}

export default AboutSection

{/* <div className='w-full h-auto px-[10vw]'>
    <Grid>
        <section className=' h-fit col-start-1 col-span-full lg:col-span-5 bg-gray-100 dark:bg-gray-800 p-5 rounded-lg flex flex-col gap-5'>
            <h1 className='font-heading text-[28px] font-bold text-black dark:text-white'>About Us</h1>
            <p className='font-text text-[18px] font-medium text-gray-400'>{business.detailedDesc}</p>
        </section>
        <section className='h-fit mt-5 lg:mt-0 gap-y-5 col-start-1 col-span-full lg:col-start-6 lg:col-span-7 bg-gray-100 dark:bg-gray-800 p-5 rounded-lg flex flex-col gap-5'>
            <h1 className='font-heading text-[28px] font-bold text-black dark:text-white'>Why customer choose us</h1>
            {business.whyUs.map((pts) => {
                return <p key={pts} className='font-text text-[18px] font-medium text-gray-400'>{pts}</p>
            })}
        </section>
    </Grid>
    </div> */}