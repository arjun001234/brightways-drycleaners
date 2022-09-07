import { LoaderFunction, MetaFunction } from '@remix-run/node'
import { AboutPageData } from '~/types/types';
import { getBusiness } from '~/sanity/query/business.server';
import { useLoaderData } from '@remix-run/react';
import SectionWrapper from '~/components/wrappers/sectionWrapper';
import banner from '../../public/images/about-banner.png'

export const loader : LoaderFunction = async () : Promise<AboutPageData> => {
    const business = await getBusiness();
    if (!business) {
      throw new Error("Couldn't fetch business");
    }
    return {
        business: business
    }
} 

export const meta: MetaFunction = () => {
  return { title: "About",
    description: "With 50+ years of experience, Brightways Dry cleaners has been providing the best dry cleaners services in Faridabad. If you’re looking for the best dry cleaners near you,  Brightways Dry cleaners is the one!"
  };
};

const AbouPage = () => {

   const {business} = useLoaderData<AboutPageData>();

  return (
    <div className='py-[50px] lg:pb-[50px] lg:pt-[100px]'>
        <SectionWrapper id="info">
            <div className='col-start-1 row-start-2 col-span-full lg:row-start-1 lg:col-span-6 flex items-center'>
              <p className='text-lg font-text dark:text-gray-400 text-gray-700 leading-8 text-left w-full'>{business.detailedDesc}</p>
            </div>
            <div className='col-start-1 row-start-1 col-span-full lg:col-start-8 lg:col-span-5'>
              <img loading='lazy' src={banner} className='w-full h-[400px]' />
            </div>
        </SectionWrapper>
        <SectionWrapper id="founder" heading="Founder's Note">
              <section className='h-auto w-full gap-y-1 col-start-1 col-span-full lg:col-span-4 row-start-1 self-center'>
                <img loading='lazy' className='h-[200px] w-full rounded-[5px] object-contain' src={business.founder.image.imageUrl} alt={business.founder.image.alt} />
                <p className='h-[30px] w-full text-center font-text font-bold text-base mt-[2px] text-black dark:text-white'>1935 - 2016</p>
              </section>
              <section className='flex flex-col gap-5 items-center lg:items-start w-full row-start-2 lg:row-start-1 col-start-1 col-span-full lg:col-start-6 lg:col-span-7  mt-[20px] lg:mt-0'>
                <p className='text-lg font-text dark:text-gray-400 text-gray-700 leading-8 text-center lg:text-left'><b className='text-[24px] text-primary pr-1'>"</b>{business.founder.message}<b className='text-[24px] text-primary pl-1'>"</b></p>
                <p className='text-[24px] font-heading text-primary'>{business.founder.name}</p>
              </section>   
        </SectionWrapper>
    </div>
  )
}

export default AbouPage