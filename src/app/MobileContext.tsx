"use client"
import { createContext, useState } from 'react'

interface MobileContext {
    mobileTitle: string;
    setMobileTitle: (mobileTitle: string) => void;
}
export const MobileContext = createContext<MobileContext | null>(null)

export const MobileProvider = ({ children }: { children: React.ReactNode }) => {
    const [mobileTitle, setMobileTitle] = useState('')

    return (
        <MobileContext.Provider value={{mobileTitle, setMobileTitle}}>
            {children}
        </MobileContext.Provider>
    )
}
