import { useLoaderData } from "@remix-run/react";
import { IndexPageData } from "~/types/types";
import Metric from "./metric";

const Metrics = () => {
  const { metrics } = useLoaderData<IndexPageData>();

  console.log(metrics)

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 w-full gap-y-5 px-[10vw] py-[40px]">
      {metrics.map((m) => (
        <Metric key={m.id} data={m} />
      ))}
    </section>
  );
};

export default Metrics;
