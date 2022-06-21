import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './MainStack'

const Navigation = () => {
    return (
        <NavigationContainer>
            <MainStack/>    
        </NavigationContainer>    
    )
}

export default Navigation   