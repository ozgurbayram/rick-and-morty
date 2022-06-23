import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const HeaderRight = () => {
    const navigation = useNavigation()
    return (
        <Pressable 
            onPress={()=>{
                navigation.navigate('Favorites')
            }}
        >
            <Ionicons  name="heart" size={28} color="orange"/>
        </Pressable>
    )
}

export default HeaderRight