import { AxiosError } from "axios"
import { sanityPostQueryUrl, sanityQueryClient, sanityQueryResponseType } from '../sanity.server'
import { Service } from "../types"
import { getImageQuery } from "./image.server"

export const getServiceQuery = () => {
    return `*[_type == 'service']{
        id,
        name,
        shortDesc,
        detailedDesc,
        "image": ${getImageQuery("image")}
      }[] | order(id asc)`
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

