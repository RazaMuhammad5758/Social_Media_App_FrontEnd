import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('darkMode')) || 'false')

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }


    useEffect(()=>{
        localStorage.setItem('darkMode', darkMode)
    }, [darkMode])

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}