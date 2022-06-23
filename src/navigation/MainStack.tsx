import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Episodes from '../screens/Episodes'
import EpisodeDetail from '../screens/EpisodeDetail'
import Character from '../screens/Character'
import { MainStackParamList } from '../types'
import Favorites from '../screens/Favorites'
import HeaderRight from '../components/HeaderRight'

const Stack = createNativeStackNavigator<MainStackParamList>()

const MainStack = ({navigation}) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShadowVisible:false,
                headerTitleAlign:'center'
            }}
        >
            <Stack.Screen name='Episodes'
                options={{
                    headerRight:()=>(<HeaderRight navigation={navigation}/>)
                }}
                component={Episodes}/>
            <Stack.Screen name='EpisodeDetail' component={EpisodeDetail}/>
            <Stack.Screen name='Character' component={Character}/>
            <Stack.Screen name="Favorites" component={Favorites} options={{headerTitle:''}}/>
        </Stack.Navigator>    
    )
}

export default MainStack