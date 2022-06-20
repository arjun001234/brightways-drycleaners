import { AxiosError } from "axios"
import { Service } from "../../types/types"
import { sanityPostQueryUrl, sanityQueryClient, sanityQueryResponseType } from '../sanity.server'
import { getImageQuery } from "./image.server"

export const getServiceQuery = () => {
    return `*[_type == 'service']{
        _id,
        name,
        shortDesc,
        detailedDesc,
        "image": ${getImageQuery("image")}
      }`
}

export const getServices = async (): Promise<Service[]> => {
    try {
        const res = await sanityQueryClient.post<sanityQueryResponseType<Service[]>>(sanityPostQueryUrl, {
            query: getServiceQuery()
        })
        if (res.status === 200) {
            return res.data.result
        } else {
            throw new Error("Couldn't fetch services")
        }
    } catch (error) {
        console.log(error)
        throw new Error((error as AxiosError).message)
    }
}

