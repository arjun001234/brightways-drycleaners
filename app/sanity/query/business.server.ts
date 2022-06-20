import { AxiosError } from "axios"
import { Business } from "../../types/types"
import { sanityPostQueryUrl, sanityQueryClient, sanityQueryResponseType } from "../sanity.server"
import { getImageQuery } from "./image.server"

export const getBusinessQuery = () => {
    return `*[_type == 'business']{
        _createdAt,
        _id,
        _rev,
        _type,
        _updatedAt,
        companyName,
        detailedDesc,
        shortDesc,
        tagline,
        "logo": ${getImageQuery("logo")},
        "coverImage": ${getImageQuery("coverImage")}
        }[0]`
}

export const getBusiness = async (): Promise<Business> => {
    try {
        const res = await sanityQueryClient.post<sanityQueryResponseType<Business>>(sanityPostQueryUrl, {
            query: getBusinessQuery()
        })
        if (res.status === 200) {
            return res.data.result
        } else {
            throw new Error("Couldn't fetch busniness")
        }
    } catch (error) {
        console.log(error)
        throw new Error((error as AxiosError).message)
    }
}