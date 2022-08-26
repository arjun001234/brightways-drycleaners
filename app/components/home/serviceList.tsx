import React from 'react';
import Service from '../services/service';
import { AppContext } from '../context/appContext';
import { Service as ServiceType } from '~/sanity/types';
import { withListContainer, withListContainerProps } from '~/hocs/listContainer';

type ServicesListProps = withListContainerProps<ServiceType>

const ServiceList : React.FC<ServicesListProps> = ({list}) => {

  // const {services} = useLoaderData<IndexPageData>();
  const {isMobile} = React.useContext(AppContext)

  return (
    // // <SectionWrapper id="services" heading="Our Services">
    // {/* <XScrollableComponent>
    // {services.map((service,index)  => {
    //         return <Service key={service.id} service={service} delay={isMobile ? 0 : (index+2)/10}/>
    // })}
    // </XScrollableComponent> */
    // /* <section className='col-start-1 col-span-full overflow-visible h-auto flex justify-center items-center py-[50px]'>
    //   <button className={`${largeBasicButton}  col-start-1 col-span-full`}><Link to="/services">Know More</Link></button>
    // </section> */
    // /* </SectionWrapper> */}
    <div className="flex flex-row items-center gap-5">
        {list.map((service,index)  => {
            return <Service key={service.id} service={service} delay={isMobile ? 0 : (index+2)/10}/>
        })}
    </div>
  )
}

export default withListContainer(ServiceList)