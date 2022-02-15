import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";


const CustomButton = ({onPress, text, buttonStyle, textStyle}: any) => {
    return (
        <TouchableOpacity onPress={onPress} style={[style.container, buttonStyle]}>
            <Text style={[style.text, textStyle]}>{text}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        backgroundColor: 'blue',
        justifyContent: 'center',
        marginVertical: 20
    },
    text: {
        color: 'white'
    }
})

export default CustomButton;