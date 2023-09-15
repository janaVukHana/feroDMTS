import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

// createContext function accept DEFAULT VALUE. Default value is important for autocomplete purpose.
const StateContext = createContext<{
    active: string | null,
    setActive: Dispatch<SetStateAction<string | null>>,
    showMenu: boolean | null,
    setShowMenu: Dispatch<SetStateAction<boolean | null>>,
}>({
    active: null,
    setActive: () => {},
    showMenu: null,
    setShowMenu: () => {},
})

// Now create context provider
export const ContextProvider = ({ children }: { children: ReactNode }) => {

    const [active, setActive] = useState<string | null>('home')
    const [showMenu, setShowMenu] = useState<boolean | null>(() => {
        if(window.innerWidth > 768) {
            return true
        }
        return false
    })

    return (
        <StateContext.Provider value={{
            active,
            setActive,
            showMenu,
            setShowMenu
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
