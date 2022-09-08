import { BiError } from "react-icons/bi";
import LandingPage from "~/components/home/landingPage";
import Process from "~/components/home/process";
import SideBar from "~/components/ui/sidebar";
import { IndexPageData } from "~/types/types";
import { getBusiness } from "~/sanity/query/business.server";
import { getProcess } from "~/sanity/query/process.server";
import ServicesList from "~/components/home/serviceList";
import { ErrorBoundaryComponent, MetaFunction } from "@remix-run/node";
import { getServices } from "~/sanity/query/services.server";
import Metrics from "~/components/metrics/metrics";
import AboutSection from "~/components/home/aboutSection";
import WhyUsSection from "~/components/home/whyUsSection";
import { getMetrics } from "~/sanity/query/metric.server";
import { getReviews } from "~/sanity/query/review.server";
import ReviewsList from "~/components/home/reviewsList";
import { useLoaderData } from "@remix-run/react";
import { AppContext } from "~/components/context/appContext";
import React from "react";

export async function loader(): Promise<IndexPageData> {
    const business = await getBusiness();
    if (!business) {
      throw new Error("Couldn't fetch business");
    }

    const process = await getProcess()
    if (!process) {
      throw new Error("Couldn't fetch process");
    }

    const services = await getServices()
    if(!services){
      throw new Error("Coundn't fetch services")
    }

    const metrics = await getMetrics();
    if(!metrics){
      throw new Error("Coundn't fetch metrics")
    }

    const reviews = await getReviews();
    if(!reviews){
      throw new Error("Coundn't fetch reviews");
    }

  const data = {
    reviews: reviews,
    services: services,
    process: process,
    business: business,
    metrics: metrics
  };
  return data;
}

export const meta: MetaFunction = () => {
  return {
    title: "Brightways Dry Cleaners",
    description: `Since 1964, Brightways Dry cleaners has been providing the best dry cleaner services in Faridabad.
    We are experts in Clothes Dry Cleaning, Shoes Dry Clean, Curtain Dry Cleaning, Sofa Dry
    Cleaning, Carpet Dry Cleaning.
    Call us or WhatsApp us on 8010801020.`
  };
};

export default function Index() {

  const {reviews,services} = useLoaderData<IndexPageData>()

  return (
    <div className="h-auto relative w-full max-w-[100vw] overflow-visible flex flex-col items-center scroll-smooth bg-inherit gap-0 lg:gap-[50px] overflow-x-hidden">
      <LandingPage />
      <Metrics />
      <AboutSection />
      <WhyUsSection />
      {/* <Features /> */}
      <ServicesList list={services} batchSize={3} mobileBatchSize={1} listSize={services.length} containerId="services" sectionHeading="Our Services" actionButton={{to: "/services",content: "Know More"}}  />
      <Process />
      <ReviewsList list={reviews} batchSize={3} mobileBatchSize={1} listSize={reviews.length} containerId="reviews" sectionHeading="What Customers Say About Us" />
      <SideBar />
    </div>
  );
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {

  console.log(error);

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
