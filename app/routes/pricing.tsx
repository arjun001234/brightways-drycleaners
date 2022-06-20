import React from "react"; 
import CostEstimator from "~/components/pricing/costEstimator";
import Container from "~/components/services/container";
import CartProvider from "~/components/context/cartContext";
import Cart from "~/components/ui/cart"; 
import InfoWrapper from "~/components/wrappers/infoWrapper";
import { PricingPageData } from "~/types/types";
import { getServices } from "~/sanity/query/services.server";
import { LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async (): Promise<PricingPageData> => {
  const services = await getServices();
  if (!services) {
    throw new Error("Couldn't fetch business");
  }
  return {
    services 
  };
};

const PricingPage = () => {

  const {services} = useLoaderData<PricingPageData>();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev)   
  }

  return (
    <CartProvider>
      <InfoWrapper>
        <div className="flex w-full flex-col md:flex-row gap-10 overflow-visible">
          <Container services={services} />
          <Outlet context={{services}} />
          {/* <Cart open={open} handleOpen={handleOpen} />
          <CostEstimator open={open} /> */}
        </div>
      </InfoWrapper>
    </CartProvider>
  );
};

export default PricingPage;
