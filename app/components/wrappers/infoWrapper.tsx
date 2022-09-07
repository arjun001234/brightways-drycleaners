import { useLocation } from '@remix-run/react'
import React from 'react'
import { isHomePage } from '~/utils/helpers/IsHomePage'
import Grid from '../containers/grid'
import Info from '../ui/info'

type InfoWrapperProps = {
    heading?: string,
    subHeading?: string,
    id: string,
    isGrid?: boolean
}

const InfoWrapper : React.FC<InfoWrapperProps> = ({children,heading,subHeading,id,isGrid = true}) => {

  const location = useLocation()

  return (
    <div id={id} className={` relative flex bg-inherit flex-col items-center gap-[50px] lg:gap-[70px] px-[10vw] lg:min-h-screen h-auto w-full justify-center ${isHomePage(location.pathname) ? "lg:py-[50px]" : "pt-[100px] pb-[50px] lg:pb-[100px] lg:pt-[150px]"}`}>
        {heading && <Info heading={heading} subHeading={subHeading} />}
        
        {isGrid && <Grid>
          {children}
        </Grid>}
        {!isGrid && children}
    </div>
  )
}

export default InfoWrapper