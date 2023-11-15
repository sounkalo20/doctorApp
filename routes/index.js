import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import BottomTabs from '../screens/tabs';
import Conversation from '../screens/Conversation';



const Routes = () => {
    const Stack = createNativeStackNavigator();

    
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerShown : false
                }}
            >
                <Stack.Screen name="Home" component={BottomTabs} />
                <Stack.Screen name="Conversation" component={Conversation} options={{headerShown: true}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes

const styles = StyleSheet.create({})