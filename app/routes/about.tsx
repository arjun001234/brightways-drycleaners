import { LoaderFunction } from '@remix-run/node'
import { AboutPageData } from '~/types/types';
import { getBusiness } from '~/sanity/query/business.server';
import InfoWrapper from '~/components/wrappers/infoWrapper';
import { useLoaderData } from '@remix-run/react';

export const loader : LoaderFunction = async () : Promise<AboutPageData> => {
    const business = await getBusiness();
    if (!business) {
      throw new Error("Couldn't fetch business");
    }
    return {
        business: business
    }
} 

const AbouPage = () => {

   const {business} = useLoaderData<AboutPageData>();

  return (
    <InfoWrapper id="about">
    <div className="col-start-1 col-span-full">
        <section className='flex flex-col-reverse md:flex-row '>
            <div className='md:flex-1'>
              <p className='text-[18px] font-text text-gray-400'>{business.detailedDesc}</p>
            </div>
            <div className='md:flex-1'>

            </div>
        </section>
        <section>
            <div></div> 
            <div></div> 
        </section>
    </div>
    </InfoWrapper>
  )
}

export default AbouPage