import React, { createContext } from 'react'
import { useState } from 'react'

export const userDataContext = createContext()
const UserContext = ({children}) => {
    const [user, setuser] = useState({
        email:'',
        fullname: {
            firstName:'',
            lastName:''
        }
    })
  return (
    <div>
      <userDataContext.Provider value={{user, setuser}}>
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext
