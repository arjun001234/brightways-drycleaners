import { AxiosError } from "axios"
import { Footer } from "../../types/types"
import { sanityPostQueryUrl, sanityQueryClient, sanityQueryResponseType, sanityQueryUrl } from "../sanity.server"
import { getImageQuery } from "./image.server"

export const getFooterQuery = () => {
    return `*[_type == 'footer']{
        _id,
        desc,
        "logo": ${getImageQuery("logo")},
        "sections": sections[]{
          _key,
          name,
          "links": links[]{
            _key,
            name,
            to
          }
        }
      }[0]`
}

export const getFooter = async () : Promise<Footer | undefined> => {
  try {
    const res = await sanityQueryClient.post<sanityQueryResponseType<Footer>>(sanityPostQueryUrl,{
        query: getFooterQuery()
    }) 
     if (res.status === 200){
         return res.data.result
     }
  } catch (error) {
    console.log(error)
  }
}