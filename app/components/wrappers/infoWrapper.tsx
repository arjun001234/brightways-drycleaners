import { useLocation } from '@remix-run/react'
import React from 'react'
import { isHomePage } from '~/utils/helpers/IsHomePage'
import Grid from '../containers/grid'
import Info from '../ui/info'

type InfoWrapperProps = {
    heading?: string,
    subHeading?: string,
    id: string
}

const InfoWrapper : React.FC<InfoWrapperProps> = ({children,heading,subHeading,id}) => {

  const location = useLocation()

  return (
    <div id={id} className={`flex bg-inherit flex-col items-center gap-[50px] md:gap-[70px] px-[10vw] md:min-h-screen h-auto w-full justify-center overflow-visible ${isHomePage(location.pathname) ? "lg:py-[50px]" : "py-[100px] md:pb-[100px] md:pt-[150px]"}`}>
        {heading && subHeading && <Info heading={heading} subHeading={subHeading} />}
        <Grid>
          {children}
        </Grid>
    </div>
  )
}

export default InfoWrapper