import React from 'react'

type autoListProps = {
    noOfPages: number[]
}

const AutoList : React.FC<autoListProps> = ({children,noOfPages}) => {
  return (
    <div>
        <section>
            {children}
        </section>
        <section>
            {
              noOfPages.map((pn) => {
                <span key={pn}></span>
              })
            }
        </section>
    </div>
  )
}

export default AutoList