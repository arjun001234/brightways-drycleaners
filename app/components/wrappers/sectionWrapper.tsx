import { Link } from '@remix-run/react'
import React from 'react'
import { largeBasicButton } from '~/utils/styles'
import Grid from '../containers/grid'
import Info from '../ui/info'

export type SectionWrapperProps = {
    heading?: string,
    subHeading?: string,
    id: string,
    isGrid?: boolean,
    bgColor?: "inherit" | "primary",
    color?: "white" | "black" | "primary" | "inherit"
    darkColor?: "white" | "black" | "primary" | "inherit",
    barColor?: "white" | "black" | "primary" | "inherit",
    actionButton?: {
      content: string,
      to: string,
    }
}

const SectionWrapper : React.FC<SectionWrapperProps> = ({children,heading,subHeading,id,isGrid = true,bgColor = "inherit",color,darkColor,barColor,actionButton}) => {

  return (
    <div id={id} className={`relative flex bg-${bgColor} flex-col items-center gap-[50px] lg:gap-[50px] px-[10vw] h-auto w-full justify-center py-[40px]`}>
        {heading && <Info heading={heading} subHeading={subHeading} color={color} barColor={barColor} darkColor={darkColor}  />}    
        {isGrid && <Grid>
          {children}
        </Grid>}
        {!isGrid && children}
        {actionButton && <section className='col-start-1 col-span-full overflow-visible h-auto flex justify-center items-center'>
          <button className={`${largeBasicButton} col-start-1 col-span-full`}><Link to={actionButton.to}>{actionButton.content}</Link></button>
        </section>}
    </div>
  )
}

export default SectionWrapper