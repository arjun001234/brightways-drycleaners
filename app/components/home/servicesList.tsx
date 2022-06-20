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
    <InfoWrapper heading='Our Services' subHeading='hdhhdshbsdjbasj'>
    <motion.section transition={{staggerChildren: 0.5}} className='flex flex-row gap-10 md:pb-[50px] flex-wrap justify-center items-center w-full overflow-visible '>
        {services.map((service,index)  => {
            return <Service key={service._id} service={service} index={index} />
        })}
    </motion.section>
    <button className={`${largeBasicButton}`}>See More Services</button>
    </InfoWrapper>
  )
}

export default ServicesList