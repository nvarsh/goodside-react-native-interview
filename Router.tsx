import React from 'react';

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./containers/HomeScreen";
import LoginScreen from './containers/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import SignUpScreen from './containers/SignUpScreen';
import { getAuthContext } from './components/auth/AuthProvider';

const Stack = createNativeStackNavigator();

// separate screen into two stacks

// only after login
const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName=''>
            <Stack.Screen name="Home" component={HomeScreen}
                            options={{headerLargeTitle: true, headerLargeTitleShadowVisible: false}}/>
        </Stack.Navigator>
    )
}

// only before login
const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
        </Stack.Navigator>
    )
}

export const Router = () => {
    const {authData} = getAuthContext();

    // When authdata is set, the navigator will automatically switch to AuthStack
    return (
        <NavigationContainer>
            {(authData == undefined) ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}