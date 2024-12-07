import { createContext, useState } from "react";


export const UserContext = createContext();


const UserProvider = ({children}) => {
   
    const [geo, setGeo] = useState(false);

    return (
        <UserContext.Provider value = {{geo, setGeo}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserProvider