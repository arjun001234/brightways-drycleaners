import { Metric } from "~/types/types"
import { sanityPostQueryUrl, sanityQueryClient, sanityQueryResponseType } from "../sanity.server"

export const getMetricsQuery = () => {
    return `*[_type == 'metric']{
        id,
        name,
        suffix,
        value
      } | order(id asc)`
}

export const getMetrics = async () : Promise<Metric[] | undefined> => {
    try {
      const res = await sanityQueryClient.post<sanityQueryResponseType<Metric[]>>(sanityPostQueryUrl,{
          query: getMetricsQuery()
      }) 
       if (res.status === 200){
           return res.data.result
       }
    } catch (error) {
      console.log(error)
    }
}