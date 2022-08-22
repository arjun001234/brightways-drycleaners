import { useLoaderData } from "@remix-run/react";
import { IndexPageData } from "~/types/types";
import Metric from "./metric";

const Metrics = () => {
  const { metrics } = useLoaderData<IndexPageData>();

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 w-full px-[10vw] gap-y-5">
      {metrics.map((m) => (
        <Metric key={m.id} data={m} />
      ))}
    </section>
  );
};

export default Metrics;
