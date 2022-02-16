import React, { useState } from "react";
import { ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export const Signup = ({ navigation }: { navigation: any }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [isPassError, setIsPassError] = useState(false);
    const [passErrorMessage, setPassErrorMessage] = useState("");
    
    const handleSignupPress = () => {
        navigation.navigate({
            name: "Dashboard",
            params: {
                userName: email
            }
        });
    }
    const handleLoginPress = () => {
        navigation.navigate("Login");
    }

    const validateSymbols = (email: string) => {
        let re = /[ `!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
          return re.test(email);
    };
    const validateAtss = (email: string) => {
        let count = 0;
        for(let i=0; i<email.length; i++){
            if(email.charAt(i).includes("@"))
                count++;
        }
        return count;
    };
    const validatePass = (password: string) => {
        let message = "";
        if(password.length < 8) message = "* Minimum length is 8 \n"
        let check1 = /[0-9a-zA-z+!\/]/;
        if(!check1.test(password)) message += "* Only letters, numbers and symbols are required \n"
        else {
            let check2 = /[0-9]/
            if(!check2.test(password)) message += "* Atleast 1 letter is required \n"

            let check3 = /[+!\/]/
            if(!check3.test(password)) message += "* Atleast 1 symbol is required \n"

        }
        return message;
    }

    return (
        <View style={styles.signContainer}>
            <StatusBar barStyle="light-content" />

            <Text style={styles.bannerCreate}>Create Account</Text>

            <TextInput
            value={email}
            placeholder="Email"
            placeholderTextColor="#aaa"
            keyboardType='web-search'
            autoCapitalize="none"
            autoFocus={false}
            onChangeText={val => {

                if(validateAtss(val)>1){
                    setIsError(true)
                    setEmailErrorMessage("Multiple @'s are not allowed")
                }else if(validateSymbols(val)){
                    setIsError(true)
                    setEmailErrorMessage("Symbols are not allowed")
                } else{ setIsError(false) }
                
                setEmail(val)
            }}
            style={ [styles.inputContainerSign, {borderColor: isError? "#900":"#ccc" }] } />
            {
                isError &&
                <View style={styles.errorContainer}>
                    <Text style={{color: "#900"}}>
                        {emailErrorMessage}
                    </Text>
                </View>
            }

            <TextInput
            value={password}
            placeholder="Password"
            placeholderTextColor="#aaa"
            keyboardType='web-search'
            autoCapitalize="none"
            autoFocus={false}
            maxLength={16}
            secureTextEntry={true}
            onChangeText={val => {
                let errorMess = validatePass(val);
                if(errorMess.length > 1){
                    setIsPassError(true)
                    setPassErrorMessage(errorMess)
                }else{
                    setIsPassError(false)
                }
                setPassword(val)
            }}
            style={ [styles.inputContainerSign, {borderColor: isError? "#900":"#ccc" }] } />
            {
                isPassError &&
                <View style={styles.errorContainer}>
                    <Text style={{color: "#900"}}>
                        {passErrorMessage}
                    </Text>
                </View>
            }

            <View style={styles.warningContainer}>
                <Text style={styles.warningText}>* Minimum 8 character</Text>
                <Text style={styles.warningText}>* Only letters, numbers and symbols(+, !, /) are required</Text>
                <Text style={styles.warningText}>* Contains atleast 1 number</Text>
                <Text style={styles.warningText}>* Contains atleast 1 special symbol</Text>
            </View>
            <TouchableOpacity onPress={handleSignupPress} style={styles.btnSignContainer}>
                <Text style={styles.btnSignText}>Sign up</Text>
            </TouchableOpacity>

            <View style={styles.loginLabelContainer}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={handleLoginPress}>
                    <Text style={styles.loginClick}> Login </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}