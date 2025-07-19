import UserContext from "./userContext";
import { useState } from "react";

// This is a UserContextProvider that will provide data to all the components, 
// all those components can use that which will werap in provider as a children
const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider