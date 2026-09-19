import { createContext, useState } from "react";

export const ThemeContext = createContext(); // theme Context

export const ThemeProvider = ({ children }) => { // context provider
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme((prev) => {
            return prev === 'light' ? 'dark' : 'light';
        })
    }
    return <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
}