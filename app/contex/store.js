'use client';

import { createContext, useContext, useState } from "react";

const AppContex = createContext({})

export const AppContexProvider = ({children}) => {
    const [demo, setdemo] = useState('fjlsdfhlsd')
    const [side, setside] = useState('sideeee')

    return (
        <AppContex.Provider value={{demo, setdemo, side, setside}}>
            {children}
        </AppContex.Provider>
    )
}

export const useAppContex = () => useContext(AppContex);
