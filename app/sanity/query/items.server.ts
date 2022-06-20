import { getImageQuery } from "./image.server"
import {Item} from "~/types/types"
import { sanityPostQueryUrl, sanityQueryClient, sanityQueryResponseType } from '../sanity.server'

export const itemQuery = (serviceName: string) => {
    return `*[_type == 'item' && *[_type=='service' && _id == ^.service._ref]{...}[0].name == "${serviceName}"]{
        ...,
        "service": service->,
        "category": category->
    }`
}

export const getItems = async (serviceName: string) => {
   try {
    const res = await sanityQueryClient.post<sanityQueryResponseType<Item[]>>(sanityPostQueryUrl,{
        query: itemQuery(serviceName)
    }) 
    if (res.status === 200){
        return res.data.result
    }
   } catch (error) {
       console.log(error)
   }
}

