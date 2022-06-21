import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Episodes from '../screens/Episodes'
import EpisodeDetail from '../screens/EpisodeDetail'
import Character from '../screens/Character'

const Stack = createNativeStackNavigator()
const MainStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShadowVisible:false,
                headerTitleAlign:'center'
            }}
        >
            <Stack.Screen name='Episodes' component={Episodes}/>
            <Stack.Screen name='EpisodeDetail' component={EpisodeDetail}/>
            <Stack.Screen name='Character' component={Character}/>
        </Stack.Navigator>    
    )
}

export default MainStack