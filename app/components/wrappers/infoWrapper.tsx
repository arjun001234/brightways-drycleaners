import { useLocation } from '@remix-run/react'
import React from 'react'
import { isHomePage } from '~/utils/helpers/IsHomePage'
import Info from '../ui/info'

type InfoWrapperProps = {
    heading?: string,
    subHeading?: string
}

const InfoWrapper : React.FC<InfoWrapperProps> = ({children,heading,subHeading}) => {

  const location = useLocation()

  return (
    <div className={`flex bg-inherit flex-col items-center gap-[50px] md:gap-[70px] px-[20px] md:px-[100px] md:min-h-screen h-auto w-full justify-center ${isHomePage(location.pathname) ? "" : "py-[100px] md:pb-[100px] md:pt-[150px]"}`}>
        {heading && subHeading && <Info heading={heading} subHeading={subHeading} />}
        {children}
    </div>
  )
}

export default InfoWrapper