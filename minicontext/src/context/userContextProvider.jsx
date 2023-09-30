import React, { useState } from "react";
import userContext from "./userContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContextProvider value={{user, setUser}}>
            {children}
        </UserContextProvider>
    )
}

export default UserContextProvider;