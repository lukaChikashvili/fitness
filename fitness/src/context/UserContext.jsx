import { createContext, useState } from "react";


export const UserContext = createContext();


const UserProvider = ({children}) => {
   
    const [geo, setGeo] = useState(false);
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    return (
        <UserContext.Provider value = {{geo, setGeo, theme, toggleTheme}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserProvider