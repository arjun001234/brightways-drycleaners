import { BiError } from "react-icons/bi";
import Features from "~/components/home/featuresList";
import LandingPage from "~/components/home/landingPage";
import Process from "~/components/home/process";
import ReviewsPage from "~/components/home/testimonialsList";
import SideBar from "~/components/ui/sidebar";
import { testimonialData } from "~/data/data";
import { IndexPageData } from "~/types/types";
import { getBusiness } from "~/sanity/query/business.server";
import { getFeatures } from "~/sanity/query/features.server";
import { getProcess } from "~/sanity/query/process.server";
import ServicesList from "~/components/home/servicesList";
import { ErrorBoundaryComponent } from "@remix-run/node";
import { getServices } from "~/sanity/query/services.server";

export async function loader(): Promise<IndexPageData> {
    const business = await getBusiness();
    if (!business) {
      throw new Error("Couldn't fetch business");
    }

    const features = await getFeatures()
    if (!features) {
      throw new Error("Couldn't fetch features");
    }

    const process = await getProcess()
    if (!process) {
      throw new Error("Couldn't fetch process");
    }

    const services = await getServices()
    if(!services){
      throw new Error("Coundn't fetch services")
    }

  const data = {
    testimonials: {
      heading: "Testimonials",
      sub_heading: "People love what we do and we want to let your know",
      data: testimonialData.slice(0,3),
    },
    services: services.slice(0,3),
    process: process,
    features: features,
    business: business,
  };
  return data;
}

export default function Index() {

  return (
    <div className="h-auto relative w-screen overflow-x-hidden flex flex-col items-center scroll-smooth bg-inherit gap-[50px] lg:gap-[100px] mt-[150px] lg:mt-[200px]">
      <LandingPage />
      {/* <Metrics /> */}
      <Features />
      <ServicesList />
      <Process />
      <ReviewsPage />
      <SideBar />
    </div>
  );
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {

  return (
      <section className="min-h-screen min-w-full flex bg-blue justify-center items-center">
      <div className="p-10 h-[400px] overflow-y-hidden rounded-lg bg-white flex flex-col justify-center gap-3 items-center">
      <BiError className="fill-error-red h-[100px] w-[100px]" />
      <h1 className="text-red font-heading font-extrabold text-[48px]">Sorry</h1>
      <p className="font-text text-[18px] mb-3">Something went wrong!</p>
      <button className="p-3 rounded-md bg-blue text-white font-text text-[18px]" onClick={() => location.reload()}>Try Again</button>
      </div>
      </section>
  );
};
