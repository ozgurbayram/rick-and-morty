import AsyncStorage from "@react-native-async-storage/async-storage"
import { TCharacter } from "../types"

export const getFavoriteCharacters = async()=>{
    try {
        const data = await AsyncStorage.getItem('characters')
        if(data != null){
            return JSON.parse(data)
        }
    } catch (error) {
        return error
    }
}

export const getFavoriteCharacter = async (id:number)=>{
    try {
        const characters:TCharacter[] = await getFavoriteCharacters()
        if(characters){
            const character = characters.find((i)=>{return i.id == id})
            return character?true:false
        }else{
            return false
        }
    } catch (error) {
        console.error(error);
    }
}
export const removeFavoriteCharacter = async(id:number)=>{
    try {
        const characters:TCharacter[] = await getFavoriteCharacters()
        const new_ar = characters.filter((i)=>{return i.id != id})
        await AsyncStorage.setItem('characters',JSON.stringify(new_ar))
    } catch (error) {
        return error
    }
}

export const addFavoriteCharacter = async(character:TCharacter)=>{
    try {
        const data = await getFavoriteCharacters()
        if(data){
            const new_data:TCharacter[] = [...data,character]
            await AsyncStorage.setItem('characters',JSON.stringify(new_data))
        }else{
            const new_list =[]
            new_list.push(character)
            await AsyncStorage.setItem('characters',JSON.stringify(new_list))
        }
    } catch (error) {
        return error
    }
}