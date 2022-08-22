import { Image } from "~/types/types"
import { sanityPostQueryUrl, sanityQueryClient, sanityQueryResponseType } from "../sanity.server"

export const getImageByNameQuery = (name: string) => {
    return `*[_type == "picture" && image.caption == "${name}"]{
        "alt": image.alt,
        "caption": image.caption,
        "imageUrl": image.asset->url,
    }[0]`
}

export const getImageByName = async (name: string) : Promise<Image | undefined> => {
    try {
       const res = await sanityQueryClient.post<sanityQueryResponseType<Image>>(sanityPostQueryUrl,{
           query: getImageByNameQuery(name)
       }) 
        if (res.status === 200){ 
            return res.data.result
        }
    } catch (error) {
      console.log(error) 
    }
}