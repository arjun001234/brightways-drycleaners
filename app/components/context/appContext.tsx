import { useLoaderData } from "@remix-run/react";
import { User } from "@supabase/supabase-js";
import React from "react";
import { LayoutPageData } from "~/types/types";

export type AppContextType = {
    user: User | null,
    profile: any | null,
    isAuthenticated: boolean
}

export enum themeType {
    DARK = 'DARK',
    LIGHT = 'LIGHT'
}

export const AppContext = React.createContext<AppContextType>({
    user: null,
    profile: null,
    isAuthenticated: false
})

const AppContextProvider : React.FC = ({children}) => {

    const {isAuthenticated,user,profile} = useLoaderData<LayoutPageData>()

    return (
        <AppContext.Provider value={{isAuthenticated,user: user ? user : null,profile: profile ? profile : null}}>
         {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider