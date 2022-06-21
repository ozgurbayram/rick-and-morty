import { View, Text, Pressable, Alert, StyleSheet } from 'react-native'
import React from 'react'
import { TEpisode } from '../types'

const EpisodeItem= ({
    id,
    name,
    air_date,
    characters,
    created,
    episode,
    url
}:TEpisode) => {
    const onPress =()=>{
        Alert.alert(name)
    }
    return (
        <Pressable 
        style={styles.item}
        onPress={onPress}>
            <View>
                <Text>{name}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:'#eee',
        margin:5,
        padding:10
    }
})
export default EpisodeItem