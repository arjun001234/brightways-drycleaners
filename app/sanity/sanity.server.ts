import axios from "axios"

export const sanityQueryUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/${process.env.SANITY_DATASET}?query=`

export const sanityPostQueryUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/${process.env.SANITY_DATASET}`

export interface sanityQueryResponseType<T> {
    ms: number,
    query: string,
    result: T
}

export const sanityQueryClient = axios.create({
    baseURL: sanityQueryUrl 
})