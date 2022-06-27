import { useLoaderData } from "@remix-run/react";
import { User } from "@supabase/supabase-js";
import React from "react";
import { definitions } from "~/supabase";
import { LayoutPageData } from "~/types/types";

export type AppContextType = {
    user: User | null,
    profile: definitions['profiles'] | null,
    isAuthenticated: boolean
    setProfile: (profile: definitions['profiles']) => void
}

export enum themeType {
    DARK = 'DARK',
    LIGHT = 'LIGHT'
}

export const AppContext = React.createContext<AppContextType>({
    user: null,
    profile: null,
    isAuthenticated: false,
    setProfile: (_: definitions['profiles']) => {}
})

const AppContextProvider : React.FC = ({children}) => {

    const {isAuthenticated,user,profile} = useLoaderData<LayoutPageData>()

    const [userProfile,setUserProfile] = React.useState<definitions['profiles']|null>(profile ? profile : null) 

    const setProfile = (p: definitions['profiles']) => {
        setUserProfile(p)
    }

    return (
        <AppContext.Provider value={{isAuthenticated,user: user ? user : null,profile: userProfile,setProfile}}>
         {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider