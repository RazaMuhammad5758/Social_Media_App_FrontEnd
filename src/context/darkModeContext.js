import { createContext, useEffect } from 'react'

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') || 'false')

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