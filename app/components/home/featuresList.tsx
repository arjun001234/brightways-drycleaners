import { useLoaderData } from "@remix-run/react";
import { IndexPageData } from "~/types/types";
import Container from "../containers/container";
import Grid from "../containers/grid";
import Feature from "../features/feature";

const FeaturesList = () => {
  const { features } = useLoaderData<IndexPageData>();

  return (
    <Container>
      <Grid>
        {features.map((feature, index) => {
          return <Feature key={feature._id} feature={feature} index={index} />;
        })}
      </Grid>
    </Container>
  );
};

export default FeaturesList;
