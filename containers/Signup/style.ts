import React from "react";
import { StyleSheet, Dimensions, Platform } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({

    signContainer: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    inputContainerSign: {
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
    btnSignContainer: {
        width:screenWidth * 0.85, 
        alignSelf:'center', 
        padding:18, 
        borderRadius:8, 
        marginTop:20,
        backgroundColor: "black"
    },
    btnSignText: {
        textAlign:'center', 
        color:'white'
    },
    bannerCreate: {
        fontSize: 36,
        fontWeight: "700",
        textAlign: "center",
        marginVertical: screenHeight * 0.1
    },
    dividerSign: {
        width: "100%",
        height: screenHeight * 0.05
    },

    loginLabelContainer: {
        width: "80%",
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 12,
        marginVertical: 18
    },
    loginClick: {
        fontWeight: "bold",
        color: "#000"
    },
    errorContainer: {
        backgroundColor: "#fff0f3",
        width: "85%",
        justifyContent: "center",
        padding: 16
    },
    warningContainer: {
        width:"85%",
        padding:12,
        backgroundColor: "#e0d1b9",
        marginTop:16,
        borderRadius:12
    },
    warningText: {
        color: "#996515",
        fontWeight: "500"
    }
});