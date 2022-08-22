import { useLocation } from '@remix-run/react'
import React from 'react'
import { isHomePage } from '~/utils/helpers/IsHomePage'
import Grid from '../containers/grid'
import Info from '../ui/info'

type sectionWrapperProps = {
    heading?: string,
    subHeading?: string,
    id: string,
    isGrid?: boolean,
    bgColor?: "inherit" | "primary",
    color?: "white" | "black" | "primary" | "inherit"
    darkColor?: "white" | "black" | "primary" | "inherit",
    barColor?: "white" | "black" | "primary" | "inherit",
}

const SectionWrapper : React.FC<sectionWrapperProps> = ({children,heading,subHeading,id,isGrid = true,bgColor = "inherit",color,darkColor,barColor}) => {

  return (
    <div id={id} className={`relative flex bg-${bgColor} flex-col items-center gap-[50px] lg:gap-[70px] px-[10vw] h-auto w-full justify-center py-[40px]`}>
        {heading && <Info heading={heading} subHeading={subHeading} color={color} barColor={barColor} darkColor={darkColor}  />}    
        {isGrid && <Grid>
          {children}
        </Grid>}
        {!isGrid && children}
    </div>
  )
}

export default SectionWrapper