import React, { useState } from "react";
import userContext from "./UserContext";

//* Step2 is to create Provider as a warper it will behave
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
