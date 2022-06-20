import { Store } from "~/types/types"
import { sanityPostQueryUrl, sanityQueryClient, sanityQueryResponseType } from "../sanity.server"

export const getStoresQuery = () => {
    return `*[_type == 'store']{
        _id,
        _rev,
        _type,
        _createdAt,
        _updatedAt,
        address,
        contactNumber,
        direction,
        name,
        openOn,
        timings
      }`
}

export const getStores = async () : Promise<Store[] | undefined> => {
   try {
    const res = await sanityQueryClient.post<sanityQueryResponseType<Store[]>>(sanityPostQueryUrl,{
        query: getStoresQuery()
    }) 
     if (res.status === 200){
         return res.data.result
     }
   } catch (error) {
       console.log(error);
   }
}