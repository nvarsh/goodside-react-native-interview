import React from 'react';
import {StyleSheet,} from 'react-native';
import { AuthProvider } from './components/auth/AuthProvider';
import { Router } from './Router';

function App() {
    return (
        <AuthProvider>
            <Router/>
        </AuthProvider>
    )
}

export default App;

const styles = StyleSheet.create({});
