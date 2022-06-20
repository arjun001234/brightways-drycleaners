import { useLoaderData } from "@remix-run/react";
import React from "react";
import { IndexPageData } from "~/types/types";
import Feature from "../features/feature";
import InfoWrapper from "../wrappers/infoWrapper";

const FeaturesList = () => {

  const {features} = useLoaderData<IndexPageData>()

  const parentRef = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={parentRef} className="grid grid-cols-1 w-full px-[20px] md:px-[100px] h-auto gap-20 md:gap-40 md:my-20 overflow-y-visible">
      {features.map((feature,index) => {
          return <Feature key={feature._id} feature={feature} index={index} />
      })}
    </div>
  );
};

export default FeaturesList;
