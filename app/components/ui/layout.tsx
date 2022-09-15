import React from 'react'
import Footer from './footer'
import Header from './header'
import { ToastContainer } from 'react-toastify';
import { AnimatePresence,motion } from 'framer-motion'
import { useLocation } from '@remix-run/react';
import PageLoader from './pageLoader';
import Container from '../booking/container';
import { AppContext } from '../context/appContext';
import OfferBanner from '../offers/banner';

const Layout : React.FC = ({children}) => {

  const location = useLocation();

  const {openBooking,openOffers} = React.useContext(AppContext);

  return (
    <div className={`flex flex-col min-h-[calc(100vh - 64px)] h-auto min-w-screen scroll-smooth max-w-[100vw]`}>
        <Header pathname={location.pathname} />
        <AnimatePresence exitBeforeEnter>
        <motion.main>
          {children}
        </motion.main>
        </AnimatePresence>
        {openBooking && <Container />}
        <PageLoader />
        {openOffers && <OfferBanner />}
        <Footer/>
        <ToastContainer />
    </div>
  )
}

export default Layout 