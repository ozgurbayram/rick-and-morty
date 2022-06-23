import { View, Text, Image, Pressable, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainStackParamList } from '../types'
import { useCharacter } from '../hooks/useCharacter'
import { Ionicons } from '@expo/vector-icons'
import { addFavoriteCharacter, getFavoriteCharacter, removeFavoriteCharacter } from '../services/characterServices'

type Props = NativeStackScreenProps<MainStackParamList,'Character'>
type Character ={
    id:number
    name:string
}
const Character:React.FC<Props> = ({route,navigation}:Props) => {
    const characterId = route.params.characterId
    const [isFavorite, setIsFavorite] = useState<boolean|null>()

    const {data} = useCharacter(characterId)
    
    useEffect(() => {
        getFavoriteCharacter(characterId).then((res)=>{
            console.log(res);
            setIsFavorite(res)
        })
    }, [])
    const removeFromFav = async()=>{
        await removeFavoriteCharacter(characterId)
        setIsFavorite(false)
    }
    const addToFav =async()=>{
        await addFavoriteCharacter(data)
        setIsFavorite(true)
    }
    useEffect(() => {
        if(data){
            navigation.setOptions({
                headerTitle:data.name,
                headerRight:()=>{
                    switch (isFavorite) {
                        case true:
                            return(
                                <Pressable onPress={removeFromFav}>
                                    <Ionicons name='heart' size={32} color={"#333"}/>
                                </Pressable>    
                            )
                        case false:
                            return(
                                <Pressable onPress={addToFav}>
                                    <Ionicons name='heart-outline' size={32} color={"#333"}/>
                                </Pressable>    
                            )
                        default:
                            return(
                                <ActivityIndicator color={"#333"}/>
                            )
                    }
                }
            })        
        }
    }, [data,isFavorite])
    
    return (
        <View style={{alignItems:'center',flex:1,backgroundColor:'#fff'}}>
            <Image
                source={{
                    uri:data?.image,
                    height:200,
                    width:200,
                
                }}
                style={{
                    borderRadius:25,
                    marginVertical:20
                }}
            />
            <View style={{}}>
                <Text>{data?.gender}</Text>
                <Text>{data?.status}</Text>
                <Text>{data?.type}</Text>
                <Text>{data?.species}</Text>
            </View>
        </View>
    )
}

export default Character