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
            <div className='row-start-1 col-start-1 col-span-full flex justify-center items-center mb-5'>
              <h1 className='text-[36px] font-heading font-bold text-black dark:text-white'>Founder's Note</h1>
            </div>
            <div className='col-start-1 col-span-full flex flex-col items-center gap-5'>
              <section className='h-auto w-[120px] gap-y-1'>
                <img className='h-[120px] w-full rounded-[5px]' src={business.founder.image.imageUrl} alt={business.founder.image.alt} />
                <p className='h-[30px] w-full text-center font-text font-bold text-base'>1935 - 2016</p>
              </section>
              <section className='flex flex-col gap-5 items-center w-full'>
                <p className='text-lg font-text text-gray-700 leading-8 text-center'><b className='text-[24px] text-primary dark:text-white pr-1'>"</b>{business.founder.message}<b className='text-[24px] text-primary dark:text-white pl-1'>"</b></p>
                <p className='text-[24px] font-heading text-primary'>{business.founder.name}</p>
              </section>   
            </div>
        </Grid>
    </div>
    </InfoWrapper>
  )
}

export default AbouPage