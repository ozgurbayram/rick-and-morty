import useSWR, { Fetcher } from "swr"
import { BASE_URL } from "../constants"
import { TCharacter } from "../types"

const fetcher:Fetcher<TCharacter> = (url:string) => fetch(url).then(res => res.json())


export const useCharacter =(id:number)=>{
    const {data,error} = useSWR(`${BASE_URL}/character/${id}`,fetcher)
    
    return {
        data:data,
        error:error,
        isLoading:!error && !data
    }
}
