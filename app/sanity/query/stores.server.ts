
import { sanityPostQueryUrl, sanityQueryClient, sanityQueryResponseType } from "../sanity.server"
import { Store } from "../types"

export const getStoresQuery = () => {
    return `*[_type == 'store']{
        address,
        contactNumber,
        direction,
        name,
        openOn,
        timings,
        id,
      }[] | order(id asc)`
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