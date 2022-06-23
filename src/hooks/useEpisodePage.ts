import useSWR from "swr"
import { BASE_URL } from "../constants"

export const fetcher = (url:string) => fetch(url).then(res => res.json())

export const useEpisodePage =(index:number)=>{
    const {data,error} = useSWR(`${BASE_URL}/episode/?pageIndex=${index}`,fetcher)
    
    return {
        data:data,
        error:error,
        isLoading:!error && !data
    }
}