import { AxiosError } from "axios"
import { sanityPostQueryUrl, sanityQueryClient, sanityQueryResponseType } from '../sanity.server'
import { Review } from "../types"
import { getImageQuery } from "./image.server"

export const getReviewQuery = () => {
    return `*[_type == 'review']{
        id,
        content,
        heading,
        location,
        name,
        rating, 
        "image": ${getImageQuery("image")}
      }[] | order(id asc)`
}

export const getReviews = async (): Promise<Review[]> => {
    try {
        const res = await sanityQueryClient.post<sanityQueryResponseType<Review[]>>(sanityPostQueryUrl, {
            query: getReviewQuery()
        })
        if (res.status === 200) {
            return res.data.result
        } else {
            throw new Error("Couldn't fetch reviews")
        }
    } catch (error) {
        console.log(error)
        throw new Error((error as AxiosError).message)
    }
}