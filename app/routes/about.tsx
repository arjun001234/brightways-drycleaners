import { LoaderFunction, MetaFunction } from '@remix-run/node'
import { AboutPageData } from '~/types/types';
import { getBusiness } from '~/sanity/query/business.server';
import InfoWrapper from '~/components/wrappers/infoWrapper';
import { useLoaderData } from '@remix-run/react';
import Grid from '~/components/containers/grid';

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
  return { title: "About" };
};

const AbouPage = () => {

   const {business} = useLoaderData<AboutPageData>();

   console.log(business);

  return (
    <InfoWrapper id="about">
    <div className="col-start-1 col-span-full">
        <Grid>
         <div className='col-start-1 col-span-full lg:col-span-7'>
              <p className='text-[18px] font-text text-gray-400'>{business.detailedDesc}</p>
            </div>
            <div className='col-start-1 row-start-1 col-span-full lg:col-span-5 lg:col-start-7'>

            </div>
        </Grid>
        <Grid>
            <div className='row-start-1 col-start-1 col-span-full flex justify-center items-center'>
              <h1 className='text-[36px] font-heading font-bold text-black dark:text-white'>Founder's Note</h1>
            </div>
            <div className='col-start-1 col-span-full flex flex-col'>
              <section>
                <img />
              </section>
              <section className='flex flex-col gap-5 items-center'>
                <p className='text-[18px] font-text text-gray-400'><b className='text-[24px] text-black dark:text-white pr-2'>"</b> {business.founder.message} <b className='text-[24px] text-black dark:text-white pl-2'>"</b></p>
                <p className='text-[24px] font-heading text-blue'>{business.founder.name}</p>
              </section>   
            </div>
        </Grid>
    </div>
    </InfoWrapper>
  )
}

export default AbouPage