import { createContext, useState } from "react";

export const UserContext = createContext(); // UserContext is a context

export const UserProvider = ({ children }) => { // provide for UserContext
    const [user, setUser] = useState({ name: 'Guest' });
    const setLoggedinUser = (name) => {
        setUser({ name })
    }
    return <UserContext.Provider value={{ user, setLoggedinUser }}>
        {children}
    </UserContext.Provider>
}