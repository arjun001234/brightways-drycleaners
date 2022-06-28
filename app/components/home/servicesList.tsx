import React from 'react';
import { IndexPageData } from '~/types/types';
import Service from '../services/service';
import InfoWrapper from '../wrappers/infoWrapper';
import {motion} from 'framer-motion'
import { largeBasicButton } from '~/utils/styles';
import { useLoaderData } from '@remix-run/react';

type serviceProps = {
}

const ServicesList : React.FC<serviceProps> = () => {

  const {services} = useLoaderData<IndexPageData>();

  return (
    <InfoWrapper heading='Our Services' subHeading='hdhhdshbsdjbasj' id="services">
    <motion.section transition={{staggerChildren: 0.5}} className='flex flex-row gap-10 md:pb-[50px] flex-wrap justify-center items-center overflow-visible col-start-1 col-span-full'>
        {services.map((service,index)  => {
            return <Service key={service._id} service={service} delay={(index+1)*100} />
        })}
    </motion.section>
    <section className='col-start-1 col-span-full overflow-visible h-auto flex justify-center items-center py-[50px] lg:py-0'>
    <button className={`${largeBasicButton}  col-start-1 col-span-full`}>See More Services</button>
    </section>
    </InfoWrapper>
  )
}

export default ServicesList