import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    loadingContainer: {
        backgroundColor: "#000",
        width:screenWidth,
        height: screenHeight,
        opacity:0.5,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
});