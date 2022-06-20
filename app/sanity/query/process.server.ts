import { AxiosError } from "axios"
import { Process } from "../../types/types"
import { sanityPostQueryUrl, sanityQueryClient, sanityQueryResponseType } from "../sanity.server"
import { getImageQuery } from "./image.server"

export const getProcessQuery = () => {
    return `*[_type == "process"]{
        _createdAt,
          _id,
          _rev,
          _type,
          _updatedAt,
          desc,
          title,
          steps,
          "image": ${getImageQuery("image")}
      }[0]`
}

export const getProcess = async (): Promise<Process> => {
    try {
        const res = await sanityQueryClient.post<sanityQueryResponseType<Process>>(sanityPostQueryUrl, {
            query: getProcessQuery()
        })
        if (res.status === 200) {
            return res.data.result
        } else {
            throw new Error("Couldn't fetch process")
        }
    } catch (error) {
        console.log(error)
        throw new Error((error as AxiosError).message)
    }
}