import React, { useState } from "react";
import { StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export const Login = ({ navigation}: {navigation: any}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        navigation.navigate({
            name: "Dashboard",
            params: {
                userName: email
            }
        });
    }
    const handleSignupPress = () => {
        navigation.navigate("Signup");
    }
    return (
        <View style={styles.loginContainer}>
            <StatusBar barStyle="light-content" />

            <Text style={styles.banner}>Gooside</Text>

            <TextInput
            value={email}
            placeholder="Email"
            placeholderTextColor="#aaa"
            keyboardType='web-search'
            autoCapitalize="none"
            autoFocus={false}
            onChangeText={val => setEmail(val)}
            style={ styles.inputContainer } />

            <TextInput
            value={password}
            placeholder="Password"
            placeholderTextColor="#aaa"
            keyboardType='web-search'
            autoCapitalize="none"
            autoFocus={false}
            secureTextEntry={true}
            onChangeText={val => setPassword(val)}
            style={ styles.inputContainer } />

            <TouchableOpacity onPress={handleLogin} style={styles.btnLoginContainer}>
                <Text style={styles.btnLoginText}>Log in</Text>
            </TouchableOpacity>

            <View style={styles.signupLabelContainer}>
                <Text>Need an account? </Text>
                <TouchableOpacity onPress={handleSignupPress}>
                    <Text style={styles.signupClick}> Sign up </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}