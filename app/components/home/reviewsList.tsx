import { useLoaderData } from "@remix-run/react"
import { IndexPageData } from "~/types/types"


const TestimonialsList = () => {

  const {reviews} = useLoaderData<IndexPageData>()

  console.log(reviews);

  // const {isMobile} = React.useContext(AppContext)

  return (
    <></>
  )
}

export default TestimonialsList