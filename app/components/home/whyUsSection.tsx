import { useLoaderData } from '@remix-run/react';
import { IndexPageData } from '~/types/types';
import SectionWrapper from '../wrappers/sectionWrapper'


const WhyUsSection = () => {

    const {business} = useLoaderData<IndexPageData>();

    return (
       <SectionWrapper id="whyUs" heading="Why Us" isGrid={false}>
          <section className='h-auto w-full flex flex-col gap-5 lg:gap-0 lg:flex-row  justify-between items-start'>
            {business.whyUs.map((wu) => {
                return <div key={wu._key} className="flex flex-col justify-between gap-5 items-center h-auto flex-1 w-full lg:w-auto">
                    <div className='h-24 w-24 rounded-[50%] bg-inherit flex justify-center items-center border-2 border-primary dark:bg-slate-100'>
                    <img src={wu.icon.imageUrl} alt={wu.icon.alt || wu.icon.caption} className='h-10 w-10' />
                    </div>
                    <section className='flex justify-center items-center'>
                        <p className='dark:text-white text-black font-heading font-medium text-[24px] text-center'>{wu.content}</p>
                    </section>
                </div>
            })}
          </section>
       </SectionWrapper>
    )
}

export default WhyUsSection;