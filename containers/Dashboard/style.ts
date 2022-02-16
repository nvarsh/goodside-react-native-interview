import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    mainContainer: {
        width:screenWidth,
        height: screenHeight,
    },
    heading1: {
        fontSize: 42,
        fontWeight: "bold",
        color: "black",
        paddingHorizontal: 24,
        paddingTop: 24
    },
    heading2: {
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 12,
        color: "black",
        paddingHorizontal: 24
    },
    bubbleWrap: {
        width:screenWidth*1.2,
        height: screenWidth*1.2,
        backgroundColor: "skyblue",
        opacity:0.15,
        zIndex:-2,
        borderRadius: screenWidth,
        position: "absolute",
        top:-80,
        left:-70
    },
    logoutButton: {
        marginTop:screenHeight*0.05,
        paddingHorizontal: 24
    },
    listWrap: {
        width: "100%",
        marginTop: 24,
    },
    listItem: {
        width: "85%",
        padding: 18,
        borderWidth:1,
        borderRadius: 8,
        borderColor: "#ccc",
        alignSelf:'center',
        marginTop: 4
    }
});