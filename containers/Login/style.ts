import React from "react";
import { StyleSheet, Dimensions, Platform } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({

    loginContainer: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    inputContainer: {
        color:'#555', 
        borderColor:'#ccc', 
        borderWidth:1, 
        borderRadius:8, 
        width:screenWidth*0.85, 
        height: screenHeight*0.07,
        paddingLeft:12,
        alignSelf:'center', 
        marginTop:30
    },
    btnLoginContainer: {
        width:screenWidth * 0.85, 
        alignSelf:'center', 
        padding:18, 
        borderRadius:8, 
        marginTop:20,
        backgroundColor: "black"
    },
    btnLoginText: {
        textAlign:'center', 
        color:'white'
    },
    banner: {
        fontSize: 36,
        fontWeight: "700",
        textAlign: "center",
        marginVertical: screenHeight * 0.1
    },
    divider: {
        width: "100%",
        height: screenHeight * 0.05
    },

    signupLabelContainer: {
        width: "80%",
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 12,
        marginVertical: 18
    },
    signupClick: {
        fontWeight: "bold",
        color: "#000"
    }
});