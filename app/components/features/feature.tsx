import React from "react";
import { Feature } from "~/types/types";
import { motion } from "framer-motion";
import { horizontalAnim } from "~/utils/animations/basicAnim";
import { largeBasicButton } from "~/utils/styles";
import { Link } from "@remix-run/react";

type featureProps = {
  feature: Feature;
  index: number;
};

const Feature: React.FC<featureProps> = ({ feature, index }) => {

  return (
    <motion.div
      variants={horizontalAnim}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={[index % 2 === 0 ? "-100%" : "100%", "0%"]}
      className={`flex flex-col-reverse gap-10 md:flex-row md:even:flex-row-reverse items-center md:gap-20 overflow-visible col-start-1 col-span-full mb-[50px] lg:mb-[100px]`}
    >
      <section
        className={`flex flex-1 flex-col items-start justify-center gap-3 overflow-visible`}
      >
        <p className="text-blue text-[14px] font-bold h-auto overflow-visible">
          {feature.title}
        </p>
        <h1 className="text-[32px] text-black dark:text-white font-heading leading-[44px] font-semibold  h-auto overflow-visible">
          {feature.heading}
        </h1>
        <p className="text-[16px] text-gray-400 font-text font-normal leading-6">
          {feature.desc}
        </p>
        {feature.highlights && <ul className="text-[16px] text-gray-400 font-text font-normal list-disc">
             {feature.highlights.map((highlight,index) => {
              return <li className="" key={index}>{highlight}</li>
             })}
          </ul>}
        {feature.callToActions && <section className="flex flex-row gap-5 items-center justify-start overflow-visible w-full">
        {feature.callToActions.map(callToAction => {
           return <button key={callToAction._key} className={`${largeBasicButton} mt-3`}>
           <Link to={callToAction.to}>{callToAction.name}</Link>
         </button>
        })}
        </section>}
      </section>
      <section className="flex flex-1 justify-center items-center">
        <img
          src={feature.image.imageUrl}
          alt={feature.image.alt}
          className="h-auto w-[350px]"
        />
      </section>
    </motion.div>
  );
};

export default Feature;
