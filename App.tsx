import React from 'react';
import {Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View,} from 'react-native';

import {Colors,} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Section: React.FC<{
    title: string;
}> = ({children, title}) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
};

const HomeScreen = ({ navigation }: any) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: "#FFF",
        flex: 1,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                    <View style={styles.sectionContainer}>
                        <Text>Welcome to the Goodside Developer Interview for React Native.</Text>
                    </View>
                    <Section title="Step One">
                        Edit <Text style={styles.highlight}>App.tsx</Text> to change this
                        screen and then come back to see your edits.
                    </Section>
                </View>

                <View style={styles.sectionContainer}>
                    <Button
                        title="Go to Details"
                        onPress={() => navigation.navigate('Details')}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const DetailsScreen = ({ navigation }: any) => {
    return (
        <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </ScrollView>
    );
}

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerLargeTitle: true, headerLargeTitleShadowVisible: false}}/>
                <Stack.Screen name="Details" component={DetailsScreen} options={{headerLargeTitle: true, headerLargeTitleShadowVisible: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});
