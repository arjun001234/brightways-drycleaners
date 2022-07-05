import React from "react"; 
import CostEstimator from "~/components/pricing/costEstimator";
import Container from "~/components/services/container";
import CartProvider from "~/components/context/cartContext";
import Cart from "~/components/ui/cart"; 
import InfoWrapper from "~/components/wrappers/infoWrapper";
import { PricingPageData } from "~/types/types";
import { getServices } from "~/sanity/query/services.server";
import { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowUp } from "react-icons/md";

export const loader: LoaderFunction = async (): Promise<PricingPageData> => {
  const services = await getServices();
  if (!services) {
    throw new Error("Couldn't fetch business");
  }
  return {
    services 
  };
};

export const meta: MetaFunction = () => {
  return { title: "Pricing" };
};

const PricingPage = () => {

  const {services} = useLoaderData<PricingPageData>();

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false)
  },[])

  return (
    <CartProvider>
      <InfoWrapper id="pricing">
      <div className='fixed right-5 bottom-5 rounded-[50%] h-[50px] w-[50px] flex justify-center items-center bg-slate-100 dark:bg-slate-800 z-50 lg:hidden' onClick={() => setOpen(prev => !prev)}>  
        {open ? 
        <MdOutlineKeyboardArrowUp className=" scale-110 dark:fill-white fill-black" /> :
        <MdOutlineKeyboardArrowDown className=" scale-110 dark:fill-white fill-black" /> } 
      </div>
          <Container services={services} open={open} />
          <Outlet context={{services}} />
          {/* <Cart open={open} handleOpen={handleOpen} />
          <CostEstimator open={open} /> */}
      </InfoWrapper>
    </CartProvider>
  );
};

export default PricingPage;
