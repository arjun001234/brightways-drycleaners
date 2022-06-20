import React from "react";
import {IndexPageData} from "~/types/types";
import {motion} from 'framer-motion'
import { largeBasicButton } from "~/utils/styles";
import { useLoaderData } from "@remix-run/react";

const LandingPage: React.FC = () => {

  const {business} = useLoaderData<IndexPageData>();

  return (
    <div className="dark:bg-gray-900 mt-[100px] md:mt-[0px] relative grid px-[20px] md:px-[100px] w-[100%] min-h-[100vh] h-auto overflow-visible">
      <section className="flex flex-col gap-5 w-full justify-center  items-start overflow-x-visible col-start-1 col-end-2 row-start-2 row-end-4 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
        <p className="text-[42px] dark:text-white text-black font-semibold font-heading mx-auto overflow-hidden">
          {business.tagline}
        </p>
        <p className="text-xl text-gray-400 font-text">
          {business.shortDesc}
        </p>
        <div className="flex flex-col md:flex-row gap-5 my-4 overflow-visible w-full md:w-auto">
          <motion.button initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1,ease: "linear"}} className={`${largeBasicButton}`}>
            Book now
          </motion.button>
          <motion.button initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1,ease: "linear"}} className={`${largeBasicButton}`}>
            See how it's work
          </motion.button>
        </div>
      </section>
      <section className="w-full overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">
      </section>
    </div>
  );
};

export default LandingPage;
