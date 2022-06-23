import { View, Text, Modal, ActivityIndicator, FlatList, ListRenderItem } from 'react-native'
import React, { useState } from 'react'
import { MainStackParamList, TEpisode } from '../types'
import EpisodeItem from '../components/EpisodeItem'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEpisodePage } from '../hooks/useEpisodePage'

type Route = NativeStackScreenProps<MainStackParamList>

const Episodes:React.FC<Route> = ({route,navigation}:Route) => {
    const [pageIndex, setPageIndex] = useState(1)
    const {data,error,isLoading} = useEpisodePage(pageIndex)
    
    
    const _renderItem:ListRenderItem<TEpisode> = ({item}) =>{
        return(
            <EpisodeItem navigation={navigation} {...item}/>
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
                data={data.results}
                renderItem={_renderItem}
            />
        
        </View>
    )
}

export default Episodes