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
    isMobile: boolean
    openBooking: boolean
    openBookingModal: (value: boolean) => void
}

export enum themeType {
    DARK = 'DARK',
    LIGHT = 'LIGHT'
}

export const AppContext = React.createContext<AppContextType>({
    user: null,
    profile: null,
    isAuthenticated: false,
    setProfile: (_: definitions['profiles']) => {},
    isMobile: false,
    openBooking: false,
    openBookingModal: (value: boolean) => {}
})

const AppContextProvider : React.FC = ({children}) => {

    const {isAuthenticated,user,profile} = useLoaderData<LayoutPageData>()

    const [userProfile,setUserProfile] = React.useState<definitions['profiles']|null>(profile ? profile : null) 
    const [isMobile,setIsMobile] = React.useState(false)
    const [bookingModal,setBookingModal] = React.useState(false);

    const setProfile = (p: definitions['profiles']) => {
        setUserProfile(p)
    }

    const setOpenBooking = (value: boolean) => {
        setBookingModal(value)
    }

    React.useEffect(() => {
        if(window.innerWidth < 768){
            setIsMobile(true)
        }else {
            setIsMobile(false)
        }
    },[])

    React.useEffect(() => {
        const handleMobile = () => {
            if(window.innerWidth < 768){
                setIsMobile(true)
            }else {
                setIsMobile(false)
            }
        }
        window.addEventListener("resize",handleMobile)
        return () => window.removeEventListener("resize",handleMobile)
    },[])

    return (
        <AppContext.Provider value={{isAuthenticated,user: user ? user : null,profile: userProfile,setProfile,isMobile,openBooking: bookingModal,openBookingModal: setOpenBooking}}>
         {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider