
import { Header } from "../../types/types"
import { sanityPostQueryUrl, sanityQueryClient, sanityQueryResponseType } from "../sanity.server"
import { getImageQuery } from "./image.server"

export const getHeaderQuery = () => {
    return `*[_type == 'header']{
        _id,
        "nav": nav[]{
            _key,
            name,
            to
        },
        "logo": ${getImageQuery("logo")}
      }[0]`
}

export const getHeader = async () : Promise<Header | undefined> => {
    try {
       const res = await sanityQueryClient.post<sanityQueryResponseType<Header>>(sanityPostQueryUrl,{
           query: getHeaderQuery()
       }) 
        if (res.status === 200){ 
            return res.data.result
        }
    } catch (error) {
      console.log(error) 
    }
}