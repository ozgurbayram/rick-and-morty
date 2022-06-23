import useSWR from "swr"
import { BASE_URL } from "../constants"

export const fetcher = (url:string) => fetch(url).then(res => res.json())

export const useEpisode =(id:number)=>{
    const {data,error} = useSWR(`${BASE_URL}/episode/${id}`,fetcher)
    
    return {
        data:data,
        error:error,
        isLoading:!error && !data
    }
}
