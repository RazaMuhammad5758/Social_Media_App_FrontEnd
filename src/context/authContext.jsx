import { createContext, useEffect, useState } from 'react';
import axios from 'axios'; // Ensure axios is imported

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );

    const login = async (inputs) => {
        try {
            const res = await axios.post("http://localhost:8800/api/auth/login", inputs, {
                withCredentials: true,
            });
            setCurrentUser(res.data);
        } catch (error) {
            throw error; // Re-throw the error to handle it in the Login component
        }
    };

    useEffect(() => {
        if (currentUser) {
            localStorage.setItem('user', JSON.stringify(currentUser));
        }
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    );
};
