import AsyncStorage from "@react-native-async-storage/async-storage"
import { TEpisode } from "../types"

export const getFavoriteEpisodes = async() =>{
    try {
        const data = await AsyncStorage.getItem('episodes')
        if(data != null){
            return JSON.parse(data) 
        }
    } catch (error) {
        return error
    }
}
export const getFavoriteEpisode = async(id:number) =>{
    try {
        const data = await AsyncStorage.getItem('episodes')
        if(data){
            const parsed:TEpisode[] = JSON.parse(data)
            const exist = parsed.find((i)=>{return i.id==id })
            return exist?true:false
        }
    } catch (error) {
        console.error(error);
    }
} 

export const removeFavoriteEpisode = async(id:number) =>{
    try {
        const data = await AsyncStorage.getItem('episodes')
        if(data){
            const filtered:TEpisode[] =JSON.parse(data)
            const new_ar = filtered.filter((i)=>{return i.id != id })
            await AsyncStorage.setItem('episodes',JSON.stringify(new_ar))
        }
    } catch (error) {
        return error        
    }
}

export const addFavoriteEpisode = async (episode:{})=>{
    try {
        let episodes = await getFavoriteEpisodes()
        if(episodes){
            const newEp = [...episodes,episode]
            await AsyncStorage.setItem('episodes',JSON.stringify(newEp))
        }
        else{
            const new_list = []
            new_list.push(episode)
            await AsyncStorage.setItem('episodes',JSON.stringify(new_list))
        }
    } catch (error) {
        return error
    }
}

export const clearAllKeys = async()=>{
    await AsyncStorage.clear()
}