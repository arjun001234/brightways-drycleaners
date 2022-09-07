import { LoaderFunction, MetaFunction, Response } from '@remix-run/node'
import React from 'react'
import DetailedServices from '~/components/services/detailedServices'
import InfoWrapper from '~/components/wrappers/infoWrapper'
import { getServices } from '~/sanity/query/services.server'
import { ServicesPageData } from '~/types/types'

export const loader : LoaderFunction = async () : Promise<ServicesPageData> => {
  const services = await getServices()
  if(!services){
    throw new Response("not found",{
      status: 404
    })
  }
  return {
    services: services
  }
}

export const meta: MetaFunction = () => {
  return {
    title: "Services",
    description: `At Brightways Dry cleaners, you will get the unmatched dry cleaning services like clothes dry cleaning, shoes dry clean, curtain dry cleaning, sofa drycleaning. You can call us or WhatsApp on 8010801020.`
  };
};


const ServicesPage : React.FC = () => {
  return (
    <InfoWrapper id="services">
      <DetailedServices />
    </InfoWrapper>
  )
}

export default ServicesPage