import { View, Text, Modal, ActivityIndicator, FlatList, ListRenderItem } from 'react-native'
import React, { useEffect } from 'react'
import { useCharacter } from '../hooks/useCharacter'
import { TEpisode } from '../types'
import EpisodeItem from '../components/EpisodeItem'

const Episodes = () => {
    
    const {episodes,info,error,isLoading} = useCharacter()
    useEffect(() => {
        console.log(info);
        
    }, [])
    
    const _renderItem:ListRenderItem<TEpisode> = ({item}) =>{
        return(
            <EpisodeItem {...item}/>
        )
    }
    if(error){
        return (
            <View>
                <Text>error</Text>
            </View>
        )
    }
    if(isLoading){
        return(
            <Modal>
                <ActivityIndicator/>
            </Modal>
        )
    }
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <FlatList
                data={episodes}
                renderItem={_renderItem}
            />
        </View>
    )
}

export default Episodes