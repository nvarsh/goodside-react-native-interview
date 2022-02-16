import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { styles } from "./style";

export const SplashScreen = ({ navigation}: {navigation: any}) => {
    const [animating, setAnimating] = useState(true);
    
    useEffect(()=>{
        setTimeout(()=>{
            setAnimating(false);
            navigation.replace("Auth");

        },2000);
    },[setTimeout]);

    return(
        <View style={styles.loadingContainer}>
            <ActivityIndicator animating={animating} color="#fff" size="large" />
        </View>
    );
}