import { largeBasicButton, lessRoundedBasicLargeButton } from "~/utils/styles"
import { AppContext } from "../context/appContext";
import React from 'react';

const OfferBanner = () => {

  const {openBookingModal,setOpenOffers} = React.useContext(AppContext);

  return (
       <section className='py-[20px] px-[10vw] fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 z-[30] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-5'>
          <p className="font-heading text-xl text-gray-700 dark:text-gray-400 text-center lg:text-left">Get 10% OFF on your first booking!</p>
          <div className="flex flex-col w-full lg:w-auto lg:flex-row items-center gap-5">
            <button className={`${largeBasicButton} bg-primary border-primary min-w-auto text-white`} onClick={ () => {
              openBookingModal(true);
              setOpenOffers(false);
            }}>Schedule PickUp</button>
            <button className={`${largeBasicButton} border-primary border-2`} onClick={setOpenOffers.bind(null,false)}>Cancel</button>
          </div>
       </section>
  )
}

export default OfferBanner