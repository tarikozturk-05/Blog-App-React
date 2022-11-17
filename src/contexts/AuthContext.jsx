import React, { createContext, useEffect, useState } from 'react'
import { userObserver } from '../helper/firebase';

export const AuthContext =createContext();


const AuthContextProvider = ({children}) => {
const [currentUser, setCurrentUser] = useState(true)

console.log(currentUser)
useEffect(() => {
  userObserver(setCurrentUser);
console.log(currentUser)
  
}, [])
console.log(currentUser)

  return (
    <div>
     <AuthContext.Provider value={{currentUser}}>
      {children}
     </AuthContext.Provider>
      
    </div>
  )
}

export default AuthContextProvider