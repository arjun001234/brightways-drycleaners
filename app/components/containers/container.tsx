import React from 'react'

const Container : React.FC = ({children}) => {
  return (
    <div className='relative h-auto px-[10vw] w-full'>{children}</div>
  )
}

export default Container