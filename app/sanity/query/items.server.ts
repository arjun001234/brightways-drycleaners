
import { sanityPostQueryUrl, sanityQueryClient, sanityQueryResponseType } from '../sanity.server'
import { Item } from '../types'

export const itemQuery = (serviceId: number) => {
    return `*[_type == 'item' && *[_type=='service' && _id == ^.service._ref]{...}[0].id == ${serviceId}]{
        ...,
        "service": service->,
        "category": category->
    }`
}

export const getItems = async (serviceId: number) => {
   try {
    const res = await sanityQueryClient.post<sanityQueryResponseType<Item[]>>(sanityPostQueryUrl,{
        query: itemQuery(serviceId)
    }) 
    if (res.status === 200){
        return res.data.result
    }
   } catch (error) {
       console.log(error)
   }
}

