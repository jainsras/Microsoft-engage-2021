import React, { createContext, useState } from 'react'
import { useContext } from 'react';

// @ts-ignore
export const StateContext = createContext();

export function StateProvider({children}){
    const [createClassDialog, setCreateClassDialog] = useState(false);
    const [joinClassDialog, setJoinClassDialog] = useState(false);
    const value = {createClassDialog, setCreateClassDialog, joinClassDialog, setJoinClassDialog};
    return <StateContext.Provider value={value}>{children}
    </StateContext.Provider>      
    
}
export const useStateValue = () => useContext(StateContext);