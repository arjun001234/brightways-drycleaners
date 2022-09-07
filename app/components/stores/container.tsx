
import { useLoaderData } from '@remix-run/react';
import { StorePageData } from '~/types/types';
import Map from '../map/map';

import Store from './store';

const Container = () => {

  const {stores} = useLoaderData<StorePageData>();

  return (
    <div className='flex flex-col justify-center gap-5 items-center col-start-1 col-span-full'>
        <Map />
        <section className='w-full lg:w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-10 py-5'>
            {stores.map((store,index) => {
                  return <Store key={store._id} store={store} delay={(index+1)*100} />
            })}
        </section>
    </div>
  )
}

export default Container