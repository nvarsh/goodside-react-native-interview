import React, { useState } from 'react'
import {Alert, Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, useColorScheme, View} from "react-native";
import { getAuthContext } from '../components/auth/AuthProvider';
import CustomButton from '../components/CustomButton';

const SignUpScreen = ({navigation}: any) => {
    const isDarkMode = useColorScheme() === 'dark';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login} = getAuthContext();

    const pressSignUp = () => {

        // check email
        if (!validateEmail(email)) {
            Alert.alert("invalid email");
            return;
        }

        // check password
        const error = validatePassword(password);
        if (error != '') {
            Alert.alert(error);
            return;
        }

        // sign up successfully
        login(email, password);
    }

    const validateEmail = (email: string): boolean => {
        return String(email)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ) != null;
    };

    const validatePassword = (password: string): string => {
        // just use string here to containe the error messages, could improve by using error object
        let errorMsgs = '';

        if (!validateLength(password)) errorMsgs += '8 characters min., 16 characters max.\n';
        if (!validateNumber(password)) errorMsgs += 'Contains at least one number\n';
        if (!validateLetter(password)) errorMsgs += 'Contains at least one letter\n';
        if (!validateSpecialChar(password)) errorMsgs += 'Contains at least one special character\n';

        return errorMsgs;
    }

    const validateNumber = (password: string) => {
        return password.match(".*[0-9].*") != null
    }

    const validateLetter = (password: string) => {
        return password.match(".*[a-zA-Z].*") != null;
    }

    const validateLength = (password: string) => {
        return password.match(/^.{8,16}$/) != null;
    }

    const validateSpecialChar = (password: string) => {
        return password.match(/^.(?=.*[+!/]$)/) != null
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
                        text={'Sign Up'}
                        onPress={pressSignUp}
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

export default SignUpScreen