import React, { createContext, useState } from 'react';
import { useContext } from 'react';

type AuthContextData = {
    authData: AuthData;
    login(email: string, password: string): Promise<void>;
    logout(): void;
}

type AuthData = {
    username: string;
    email: string;
    password: string;
}

// create a context provider to hold auth data
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const getAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
};

export const AuthProvider: React.FC = ({ children }) => {

    const [authData, setAuthData] = useState<any>();
    
    const login = async (email: string, password: string) => {
        setAuthData({
            email: email,
            username: email,
            password: password,
        } as any);
    }

    const logout = () => {
        setAuthData(undefined);
    }

    return (
        <AuthContext.Provider
            value={{
                authData,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}