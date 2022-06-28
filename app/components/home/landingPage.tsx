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
          <p className="text-xl text-gray-400 font-text">
            {business.shortDesc}
          </p>
          <div className="flex flex-col md:flex-row gap-5 my-4 overflow-visible w-full md:w-auto">
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
  /* <div className="dark:bg-gray-900 mt-[100px] md:mt-[0px] relative grid px-[20px] md:px-[100px] w-[100%] min-h-[100vh] h-auto overflow-visible grid-cols-1 md:grid-cols-2">
    <section className="flex flex-col gap-5 w-full justify-center  items-start overflow-x-visible col-start-1 col-end-2 row-start-2 row-end-4 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 animate-fade-in-top">
      <p className="text-[42px] dark:text-white text-black font-semibold font-heading mx-auto overflow-hidden">
        {business.tagline}
      </p>
      <p className="text-xl text-gray-400 font-text">
        {business.shortDesc}
      </p>
      <div className="flex flex-col md:flex-row gap-5 my-4 overflow-visible w-full md:w-auto">
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
    <section className="w-full overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">
      <img alt="brightways-landing-page-pic" />
    </section>
  </div>  */
}
