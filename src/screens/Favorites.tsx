import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import {  getFavoriteEpisodes } from '../services/episodeServices'
import EpisodeItem from '../components/EpisodeItem'
import { TEpisode } from '../types'
import { getFavoriteCharacters } from '../services/characterServices'

type TabNavigatorProps ={
    Episodes:undefined
    Characters:undefined
}
const Characters = ()=>{
    const [characters, setCharacters] = useState<[{}]>()
    useEffect(() => {
        getFavoriteCharacters().then((res)=>{
            console.log("episodes",res);
            setCharacters(res)
        })
    }, [])
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
            {characters && characters.map((i)=>{
                return (
                    <View style={{display:'flex',flexDirection:'row',backgroundColor:'#333',margin:10}}>
                        <Image
                            source={{
                                uri:i.image,
                                height:100,
                                width:100
                            }}
                        />
                        <Text style={{color:'#fff'}}>{i.name}</Text>
                    </View>
                )
            })}
        </View>
    )
}
const Episodes = ()=>{
    const [episodes, setEpisodes] = useState<TEpisode[]>()
    useEffect(() => {
        getFavoriteEpisodes().then((res)=>{
            console.log("episodes",res);
            setEpisodes(res)
        })
    }, [])
    
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
            {episodes && episodes.map((ep)=>{
                return (
                    <EpisodeItem  {...ep}/>
                )
            })}
        </View>
    )
}
const Tab = createMaterialTopTabNavigator<TabNavigatorProps>()
const Favorites = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    elevation:0
                },
                tabBarIndicatorStyle:{
                    backgroundColor:'#555'
                },
            }}
        >
            <Tab.Screen name="Characters" component={Characters}/>
            <Tab.Screen name="Episodes" component={Episodes}/>
        </Tab.Navigator>
    )
}

export default Favorites