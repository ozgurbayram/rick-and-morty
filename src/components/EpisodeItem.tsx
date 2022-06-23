import { View, Text, Pressable, Alert, StyleSheet, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { MainStackParamList, TEpisode } from '../types'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


interface Props extends TEpisode {
    navigation?:NativeStackNavigationProp<MainStackParamList>
}

const EpisodeItem:React.FC<Props> = ({
    id,
    name,
    air_date,
    characters,
    created,
    episode,
    url,
    navigation
}:Props) => {
    const onPress =()=>{
        navigation?.navigate('EpisodeDetail',{
            episodeId:id
        })
    }
    return (
            <Pressable
                style={styles.item}
                onPress={onPress}>
                <View>
                    <Text style={[styles.itemText]}>{name}</Text>
                    <Text style={[styles.itemText]}>{episode}</Text>
                    <Text style={[styles.itemText]}>{air_date}</Text>
                    <Text style={[styles.itemText]}>{characters.length} Character</Text>
                </View>
            </Pressable>
       
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:'#333',
        margin:10,
        padding:10,
    },
    itemText:{
        color:'#fff',
        fontWeight:'bold',
    }
})
export default EpisodeItem