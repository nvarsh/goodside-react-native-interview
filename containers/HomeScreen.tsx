import React from 'react'
import {Button, SafeAreaView, ScrollView, StatusBar, Text, TextInput, useColorScheme, View} from "react-native";
import { getAuthContext } from '../components/auth/AuthProvider';
import CustomButton from '../components/CustomButton';
import {Section} from "../components/Section";

const HomeScreen = ({navigation}: any) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: "#FFF",
        flex: 1,
    };

    const {logout, authData} = getAuthContext();

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <Section title={`Welcome ${authData.username}`}></Section>

                <Section title={"UI"}>
                    <View style={{ flexDirection: "column", flex: 1 }}>
                        <View style={{ flex: 1, padding: 20, backgroundColor: "#ECECEC", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <Text>Button</Text>
                            <Button
                                title="Go to Details"
                                onPress={() => navigation.navigate('Details')}
                            />
                        </View>
                        <View style={{ marginTop: 10, padding: 20, backgroundColor: "#ECECEC", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ marginBottom: 5 }}>Input</Text>
                            <TextInput placeholder={"Some input"} style={{ backgroundColor: "white", padding: 10 }}/>
                            <CustomButton text={"Log Out"} onPress={logout}/>
                        </View>
                    </View>
                </Section>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen