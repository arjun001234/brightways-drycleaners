import { AxiosError } from "axios"
import { Feature } from "../../types/types"
import { sanityPostQueryUrl, sanityQueryClient, sanityQueryResponseType } from "../sanity.server"
import { getImageQuery } from "./image.server"

export const getFeaturesQuery = () => {
    return `*[_type == "feature"]{
        _id,
        number,
        desc,
        heading,
        title,
        to,
        "highlights": highlights[],
        "callToActions": callToActions[]{
            _key,
            name,
            to
        },
        "image": ${getImageQuery("image")}
      } | order(number asc)`
}

export const getFeatures = async () : Promise<Feature[]> => {
    try {
        const res = await sanityQueryClient.post<sanityQueryResponseType<Feature[]>>(sanityPostQueryUrl,{
        query: getFeaturesQuery()
    }) 
    if (res.status === 200) {
        return res.data.result
    } else {
        throw new Error("Couldn't fetch features")
    }
    } catch (error) {
        throw new Error((error as AxiosError).message)
    }
}