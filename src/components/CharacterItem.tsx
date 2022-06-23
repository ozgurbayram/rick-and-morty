import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import useSWR from 'swr'
import { fetcher } from '../hooks/useEpisode'
import { MainStackParamList, TCharacter } from '../types'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

const Item:React.FC<TCharacter> = ({
    id,
    name,
    created,
    episode,
    gender,
    image,
    location,
    origin,
    species,
    status,
    type,
}:TCharacter)=>{
    const navigation = useNavigation()
    const onPress = ()=>{
        navigation.navigate('Character',{
            characterId:id
        })
    }   
    return (
        <Pressable onPress={onPress}>
                <Image
                    source={{
                        uri:image,
                        height:100,
                        width:'100%',
                    }}
                    style={{borderRadius:10}}
                />
                <Text style={{color:'#fff',fontSize:21,paddingTop:10,alignSelf:'center'}}>{name}</Text>
        </Pressable>
    )
}

interface Props {
    url:string
}
const CharacterItem = ({
    url
}:Props) => {
    const {data,error} = useSWR(url,fetcher)
    
    if(data){
        return (
            <View style={{
                width:'45%',
                height:150,
                margin:'2%',
                borderRadius:10,
                backgroundColor:'orange',
            }}>
                <Item {...data}/>
            </View>
        )
    }
    return(
        <View style={{
            width:'45%',
            height:100,
            borderRadius:10,
            backgroundColor:'orange',
            opacity:0.2
        }}>
        </View>
    )   
}

export default CharacterItem