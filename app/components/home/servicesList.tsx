import React from 'react';
import { IndexPageData } from '~/types/types';
import Service from '../services/service';
import InfoWrapper from '../wrappers/infoWrapper';
import {motion} from 'framer-motion'
import { largeBasicButton } from '~/utils/styles';
import { Link, useLoaderData } from '@remix-run/react';
import { fade } from '~/utils/animations/basicAnim';

type serviceProps = {
}

const ServicesList : React.FC<serviceProps> = () => {

  const {services} = useLoaderData<IndexPageData>();

  return (
    <InfoWrapper heading='Our Services' subHeading='hdhhdshbsdjbasj' id="services">
    <section className='flex flex-row gap-10 lg:pb-[50px] flex-wrap justify-center items-center overflow-visible col-start-1 col-span-full'>
        {services.map((service,index)  => {
            return <Service key={service._id} service={service} delay={(index+1+2)*100} />
        })}
    </section>
    <section className='col-start-1 col-span-full overflow-visible h-auto flex justify-center items-center py-[50px] lg:py-0'>
    <button className={`${largeBasicButton}  col-start-1 col-span-full`}><Link to="/services">See more services</Link></button>
    </section>
    </InfoWrapper>
  )
}

export default ServicesList