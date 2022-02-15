import React, { useState } from 'react'
import {Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, useColorScheme, View} from "react-native";
import { getAuthContext } from '../components/auth/AuthProvider';
import CustomButton from '../components/CustomButton';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const LoginScreen = ({navigation}: any) => {
    const isDarkMode = useColorScheme() === 'dark';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const {login} = getAuthContext();

    const pressLogin = () => {
        login(email, password);
    }

    const pressSignUp = () => {
        navigation.navigate("SignUp");
    }

    const pressRememberMe = async () => {
        const newRememberMe = !rememberMe;
        setRememberMe(newRememberMe);
    }

    return (
        <SafeAreaView style={styles.backgrounds}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.backgrounds}>
                    <TextInput
                        placeholder={"Email"}
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder={"Password"}
                        value={password}
                        onChangeText={setPassword}
                        style={styles.input}
                        secureTextEntry={true}
                    />
                    <CustomButton
                        text={'Login'}
                        onPress={() => pressLogin()}
                    />
                    <BouncyCheckbox
                        style={{ marginTop: 16 }}
                        isChecked={rememberMe}
                        text="Remember Me"
                        onPress={() => pressRememberMe()}
                    />                    
                    <CustomButton
                        text={'Sign Up'}
                        onPress={() => pressSignUp()}
                    />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backgrounds: {
        backgroundColor: "#FFF",
        flex: 1,
        paddingHorizontal: 20
    },
    input: {
        backgroundColor: "white", 
        padding: 20,
        marginVertical: 20,
        borderWidth: 1,
    }
})

export default LoginScreen