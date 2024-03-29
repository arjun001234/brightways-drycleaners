import { useLoaderData } from "@remix-run/react";
import { User } from "@supabase/supabase-js";
import React from "react";
import { definitions } from "~/supabase";
import { LayoutPageData } from "~/types/types";

export type AppContextType = {
    isAuthenticated: boolean
    isMobile: boolean
    openBooking: boolean
    openBookingModal: (value: boolean) => void
    openOffers: boolean
    setOpenOffers: (value: boolean) => void
}

export enum themeType {
    DARK = 'DARK',
    LIGHT = 'LIGHT'
}

export const AppContext = React.createContext<AppContextType>({
    isAuthenticated: false,
    isMobile: false,
    openBooking: false,
    openBookingModal: (value: boolean) => {},
    openOffers: false,
    setOpenOffers: (value: boolean) => {}
})

const AppContextProvider : React.FC = ({children}) => {

    const {isAuthenticated,user} = useLoaderData<LayoutPageData>()
    const [isMobile,setIsMobile] = React.useState(false)
    const [bookingModal,setBookingModal] = React.useState(false);
    const [openOffers,setOpenOffers] = React.useState(false);

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
            if(window.innerWidth < 780){
                setIsMobile(true)
            }else {
                setIsMobile(false)
            }
        }
        window.addEventListener("resize",handleMobile)
        return () => window.removeEventListener("resize",handleMobile)
    },[])

    React.useEffect(() => {
       const timeout = setTimeout(() => {
        setOpenOffers(true)
       },3000)
       return () => clearTimeout(timeout);
    },[])

    return (
        <AppContext.Provider value={{isAuthenticated,isMobile,openBooking: bookingModal,openBookingModal: setOpenBooking,openOffers,setOpenOffers: (value: boolean) => {setOpenOffers(value)}}}>
         {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider