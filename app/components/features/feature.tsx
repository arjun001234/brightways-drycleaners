import React from "react";
import { Feature } from "~/types/types";
import { motion } from "framer-motion";
import { horizontalAnim } from "~/utils/animations/basicAnim";
import { largeBasicButton } from "~/utils/styles";

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
      className={`flex flex-col-reverse gap-10 md:flex-row md:even:flex-row-reverse items-center md:gap-20 overflow-visible`}
    >
      <section
        className={`flex flex-1 flex-col items-start justify-center gap-3 overflow-visible`}
      >
        <p className="text-blue text-[14px] font-bold h-auto">
          {feature.title}
        </p>
        <h1 className="text-[32px] text-black dark:text-white font-heading leading-[44px] font-semibold  h-auto">
          {feature.heading}
        </h1>
        <p className="text-[16px] text-gray-400 font-text font-normal leading-6">
          {feature.desc}
        </p>
        <button className={`${largeBasicButton} mt-3`}>
          Contact Us
        </button>
      </section>
      <section className="flex flex-1 justify-center items-center">
        <img
          src={feature.image.imageUrl}
          alt={feature.image.alt}
          className="h-[200px] w-[200px]"
        />
      </section>
    </motion.div>
  );
};

export default Feature;
