import { BiError } from "react-icons/bi";
import LandingPage from "~/components/home/landingPage";
import Process from "~/components/home/process";
import ReviewsPage from "~/components/home/reviewsList";
import SideBar from "~/components/ui/sidebar";
import { IndexPageData } from "~/types/types";
import { getBusiness } from "~/sanity/query/business.server";
import { getProcess } from "~/sanity/query/process.server";
import ServicesList from "~/components/home/servicesList";
import { ErrorBoundaryComponent } from "@remix-run/node";
import { getServices } from "~/sanity/query/services.server";
import Metrics from "~/components/metrics/metrics";
import AboutSection from "~/components/home/aboutSection";
import WhyUsSection from "~/components/home/whyUsSection";
import { getMetrics } from "~/sanity/query/metric.server";
import { getReviews } from "~/sanity/query/review.server";

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

export default function Index() {

  return (
    <div className="h-auto relative w-screen overflow-visible flex flex-col items-center scroll-smooth bg-inherit gap-[50px]">
      <LandingPage />
      <Metrics />
      <AboutSection />
      <WhyUsSection />
      {/* <Features /> */}
      <ServicesList />
      <Process />
      <ReviewsPage />
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
