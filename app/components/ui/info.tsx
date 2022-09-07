import React from 'react'

type infoProps = {
    heading: string,
    subHeading?: string,
    color?: "white" | "black" | "primary" | "inherit"
    darkColor?: "white" | "black" | "primary" | "inherit",
    barColor?: "white" | "black" | "primary" | "inherit",
}

const Info : React.FC<infoProps> = ({heading,subHeading,color = "black",darkColor = "white",barColor = "primary"}) => {
  return (
    <section className='flex flex-col items-center'>
        <h1 className={`font-heading text-2xl text-heading text-${color} dark:text-${darkColor} text-center font-bold`}>{heading.toUpperCase()}</h1>
        <div className={`bg-${barColor} h-[6px] w-10 rounded-sm mt-1`}></div>
        {subHeading && <p className='mt-5 font-text text-[16px] text-gray-400 text-center'>{subHeading}</p>}
    </section>
  )
}

export default Info