import { withListContainer, withListContainerProps } from "~/hocs/listContainer"
import { Review as ReviewType } from "~/sanity/types"
import SingleReview from "../reviews/singleReview"

type ReviewsListProps  = withListContainerProps<ReviewType>

const ReviewsList : React.FC<ReviewsListProps> = ({list}) => {

  return (
    <div className="flex flex-row items-center gap-5">
    {list.map((data) => {
      return <SingleReview review={data} key={data.id} />
    })}
    </div>
  )
}

export default withListContainer(ReviewsList)