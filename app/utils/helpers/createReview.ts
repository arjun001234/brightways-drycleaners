import { Review, ReviewValidationError } from "~/types/types";

export const createReview = (formData: FormData) : [Review | null,ReviewValidationError| null] => {
   const review = formData.get("review") as string | null
   const rating = formData.get("rating") as string | null

   if(!review){
    return [null,{review: "review is required"}]
   }
   if(!rating){
    return [null,{rating: "rating is required"}]
   }

   if(review.length < 5){
    return [null,{review: "review too small"}]
   }

   if(!/[+]?([0-4]*\.[0-9]+|[0-5])/.test(rating)){
    return [null,{rating: "invalid rating"}]
   }

   return [{
    review,
    rating: parseFloat(rating)
   },null]
}