import React from 'react'
import { BiError } from 'react-icons/bi'
import Container from '~/components/stores/container'
import InfoWrapper from '~/components/wrappers/infoWrapper'
import { StorePageData } from '~/types/types'
import { getStores } from '~/sanity/query/stores.server'
import { ErrorBoundaryComponent, LoaderFunction, MetaFunction } from '@remix-run/node'


export const loader : LoaderFunction = async () : Promise<StorePageData> => {
    
    const stores = await getStores()

    if (!stores) {
      throw new Error("Couldn't fetch stores");
    }

    return {
        stores: stores,
        mapApiKey: process.env.GOOGLE_MAP_API_KEY
    }
}

export const meta: MetaFunction = () => {
  return {
     title: "Stores",
     description: "Brightways Dry cleaners is present at multiple locations in Faridabad. Every store is known for providing the best dry clean service in Faridabad. For any store related query, you can call us or WhatsApp us on"
};
};

const Index : React.FC = () => {
  return (
    <InfoWrapper id="stores" >
      <Container />
    </InfoWrapper>
  )
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {

  console.log(error);

  return (
      <section className="min-h-screen min-w-full flex bg-blue justify-center items-center">
      <div className="p-10 h-[400px] overflow-y-hidden rounded-lg bg-white flex flex-col justify-center gap-3 items-center">
      <BiError className="fill-error-red h-[100px] w-[100px]" />
      <h1 className="text-red font-heading font-extrabold text-[48px]">Sorry</h1>
      <p className="font-text text-[18px] mb-3">Something went wrong!</p>
      <button className="p-3 rounded-md bg-blue text-white font-text text-[18px]" onClick={() => location.reload()}>Try Again</button>
      </div>
      </section>
  );
};

export default Index