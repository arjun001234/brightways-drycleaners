import React from 'react';
import { IndexPageData } from '~/types/types';
import Service from '../services/service';
import { largeBasicButton } from '~/utils/styles';
import { Link, useLoaderData } from '@remix-run/react';
import { AppContext } from '../context/appContext';
import XScrollableComponent from '../containers/xScrollable';
import SectionWrapper from '../wrappers/sectionWrapper';

type serviceProps = {
}

const ServicesList : React.FC<serviceProps> = () => {

  const {services} = useLoaderData<IndexPageData>();
  const {isMobile} = React.useContext(AppContext)

  return (
    <SectionWrapper id="services" heading="Our Services">
    <XScrollableComponent>
    {services.map((service,index)  => {
            return <Service key={service._id} service={service} delay={isMobile ? 0 : (index+2)/10}/>
    })}
    </XScrollableComponent>
    <section className='col-start-1 col-span-full overflow-visible h-auto flex justify-center items-center py-[50px]'>
      <button className={`${largeBasicButton}  col-start-1 col-span-full`}><Link to="/services">Know More</Link></button>
    </section>
    </SectionWrapper>
  )
}

export default ServicesList