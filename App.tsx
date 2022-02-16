import React from 'react';
import {StyleSheet,} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./containers/HomeScreen";
import { SplashScreen } from "./components/Splash/SplashScreen";
import { Dashboard } from "./containers/Dashboard/Dashboard";
import {Login} from "./containers/Login/Login";
import {Signup} from "./containers/Signup/Signup";

const Stack = createNativeStackNavigator();

const Auth = ({navigation}:{navigation: any}) => {
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}} />
                <Stack.Screen name="Auth" component={Auth} options={{headerShown:false}} />
                <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

const styles = StyleSheet.create({});
