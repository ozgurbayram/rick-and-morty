import useSWR from "swr"
import { BASE_URL } from "../constatnts"

const fetcher = (url:string) => fetch(url).then(res => res.json())

export const useCharacter =()=>{
    const {data,error} = useSWR(`${BASE_URL}/episode`,fetcher)
    
    return {
        episodes:data && data.results,
        info:data && data.info,
        error:error,
        isLoading:!error && !data
    }
}