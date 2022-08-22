
import Service from "~/components/pricing/service";
import { Category, Item, Service as ServiceType } from "~/types/types";
import { getItems } from "~/sanity/query/items.server";
import { LoaderFunction } from "@remix-run/node";
import { useOutletContext, useParams,useMatches } from "@remix-run/react";
import React from "react";
import BackdropContainer from "~/components/containers/backdropContainer";
import { GiConsoleController } from "react-icons/gi";

export type ExtendedCategory = Category & {
  items: Item[]
}

export const loader: LoaderFunction = async ({ params }) => {

  const name = params.service;

  const items = await getItems(name!)

  if (!items){
     throw new Error("Not Found")
  }

  let categories : ExtendedCategory[] = []

  items.map(item => {
    const index = categories.findIndex(category => category.name === item.category?.name)
    if (index !== -1){
      categories[index].items.push(item)
    }else {
      const newCategory : ExtendedCategory = {...item.category!,items: [item]}
      categories.push(newCategory)
    }
  })

  return {
    categories: categories,
  };
};

const SingleService = () => {

  const params = useParams()

  const {services} = useOutletContext<{services: ServiceType[]}>();

  console.log(services,params)

  return (
    <BackdropContainer to="/pricing" heading={params.service!}>
      <Service service={services.find(s => s.name === params.service)} />
    </BackdropContainer>
  );
};

export default SingleService;
