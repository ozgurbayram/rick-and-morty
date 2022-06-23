import { View, Text, FlatList, ListRenderItem, ActivityIndicator, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MainStackParamList } from '../types'
import {  useEpisode } from '../hooks/useEpisode'
import CharacterItem from '../components/CharacterItem'
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { addFavoriteEpisode, getFavoriteEpisode, removeFavoriteEpisode } from '../services/episodeServices'
import { Ionicons } from '@expo/vector-icons'

type Props  = NativeStackScreenProps<MainStackParamList,'EpisodeDetail'>

const EpisodeDetail:React.FC<Props> = ({route,navigation}) => {
    const episodeId:number = route.params.episodeId
    const {data,error} = useEpisode(episodeId)
    const [isFavorite, setIsFavorite] = useState<boolean|null>()
    const _renderItem:ListRenderItem<string> = (item)=>{
            return (
                <CharacterItem
                    key={item.index}
                    url={item.item}
                />
            )
    }
    useEffect(() => {
        getFavoriteEpisode(episodeId).then((res)=>{
            console.log(res);
            setIsFavorite(res)
        })
    }, [])
    const removeFromFav = async()=>{
        await removeFavoriteEpisode(episodeId)
        setIsFavorite(false)
    }
    const addToFav =async()=>{
        await addFavoriteEpisode(data)
        setIsFavorite(true)
    }
    useEffect(() => {
        if(data){
            navigation.setOptions({
                headerTitle:data.name,
                headerTitleAlign:'left',
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
    
    if(data){
        return (
            <View style={{
                backgroundColor:'#fff',
                flex:1,
                alignItems:'center',
            }}>
                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-between',
                    width:'100%',
                    paddingVertical:10,
                    paddingHorizontal:'10%'
                }}>
                    <Text>{data.air_date}</Text>
                    <Text>{data.episode}</Text>
                </View>
                <FlatList
                    alwaysBounceHorizontal
                    refreshing
                    contentContainerStyle={{
                        display:'flex',
                        width:'90%',
                    }}
                    bounces
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    data={data.characters}
                    renderItem={_renderItem}
                />
            </View>
        )
    }
    return(
        <View>
            <ActivityIndicator/>
        </View>
    )
}

export default EpisodeDetail