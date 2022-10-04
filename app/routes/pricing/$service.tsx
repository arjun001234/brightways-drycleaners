
import Service from "~/components/pricing/service";
import { getItems } from "~/sanity/query/items.server";
import { LoaderFunction } from "@remix-run/node";
import { useOutletContext, useParams } from "@remix-run/react";
import BackdropContainer from "~/components/containers/backdropContainer";
import { Category, Item, Service as ServiceType } from "~/sanity/types";

export type ExtendedCategory = Category & {
  items: Item[]
}

export const loader: LoaderFunction = async ({ params }) => {

  const id = parseInt(params.service!);

  if(isNaN(id)){
    throw new Response("Service not found", { status: 404 });
  }

  const items = await getItems(id)

  if (!items){
    throw new Response("Service not found", { status: 404 });
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

  return (
    <BackdropContainer to="/pricing" heading={services.find(s => s.id === parseInt(params.service!))?.name || "Pricing"}>
      <Service service={services.find(s => s.id === parseInt(params.service!))} />
    </BackdropContainer>
  );
};

export default SingleService;
