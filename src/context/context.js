// import { signInWithPopup } from '@firebase/auth';
import { auth, provider } from 'lib/firebase';
import React, { createContext, useState, useEffect } from 'react'
import { useContext } from 'react';


export const StateContext = createContext();

export function StateProvider({children}){
    const [createClassDialog, setCreateClassDialog] = useState(false);
    const [joinClassDialog, setJoinClassDialog] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [loggedInMail, setLoggedInMail] = useState(null);

    const login = ()=>{
        auth.signInWithPopup(provider)
        // signInWithPopup(provider)
    }
    const logout = () => auth.signOut();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser)=>{
            if(authUser){
                setLoggedInMail(authUser.email)
                setLoggedInUser(authUser)
            }
            else{
                setLoggedInMail(null)
                setLoggedInUser(null)
            }
        });
        return()=>{
            unsubscribe();
        }
        
    }, []);
    const value = {createClassDialog, setCreateClassDialog, joinClassDialog, setJoinClassDialog, login, logout, loggedInUser, loggedInMail};
    return <StateContext.Provider value={value}>{children}
    </StateContext.Provider>      
    
}
export const useStateValue = () => useContext(StateContext);