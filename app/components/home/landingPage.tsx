import React from "react";
import { IndexPageData } from "~/types/types";
import { largeBasicButton } from "~/utils/styles";
import { useLoaderData } from "@remix-run/react";
import Container from "../containers/container";
import Grid from "../containers/grid";

const LandingPage: React.FC = () => {
  const { business } = useLoaderData<IndexPageData>();

  return (
    <Container>
      <Grid>
        <section className="col-start-1 col-span-full lg:col-start-1 lg:col-span-6">
        <p className="text-[42px] dark:text-white text-black font-semibold font-heading mx-auto overflow-hidden">
            {business.tagline}
          </p>
          <p className="text-xl text-gray-400 font-text mt-3 mb-5 lg:my-0">
            {business.shortDesc}
          </p>
          <div className="flex flex-col lg:flex-row gap-5 my-4 overflow-visible w-full lg:w-auto">
            <button
              className={`${largeBasicButton} animate-bounce-in-right delay-100`}
            >
              Book now
            </button>
            <button
              className={`${largeBasicButton} animate-bounce-in-right delay-200`}
            >
              <a href="#process">See how it's work</a>
            </button>
          </div>
        </section>
        <section className="row-start-1 col-start-1 col-span-full lg:col-start-7 lg:col-span-5">
        <img alt="brightways-landing-page-pic" className="h-[300px] w-[300px]" />
        </section>
      </Grid>
    </Container>
  );
};

export default LandingPage;

{
  /* <div className="dark:bg-gray-900 mt-[100px] lg:mt-[0px] relative grid px-[20px] lg:px-[100px] w-[100%] min-h-[100vh] h-auto overflow-visible grid-cols-1 lg:grid-cols-2">
    <section className="flex flex-col gap-5 w-full justify-center  items-start overflow-x-visible col-start-1 col-end-2 row-start-2 row-end-4 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 animate-fade-in-top">
      <p className="text-[42px] dark:text-white text-black font-semibold font-heading mx-auto overflow-hidden">
        {business.tagline}
      </p>
      <p className="text-xl text-gray-400 font-text">
        {business.shortDesc}
      </p>
      <div className="flex flex-col lg:flex-row gap-5 my-4 overflow-visible w-full lg:w-auto">
        <button  className={`${largeBasicButton} animate-bounce-in-right delay-100`}>
          Book now
        </button>
        <button  className={`${largeBasicButton} animate-bounce-in-right delay-200`}>
          <a href="#process">    
          See how it's work
          </a>
        </button>
      </div>
    </section>
    <section className="w-full overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2">
      <img alt="brightways-landing-page-pic" />
    </section>
  </div>  */
}
