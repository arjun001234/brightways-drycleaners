import React, { Children } from 'react'
import ProfileSidebar from '../profile/sidebar'
import SideBar from '../ui/sidebar'

const DashBoardWrapper : React.FC = ({children}) => {
  return (
    <div className="flex h-screen w-full bg-inherit pt-[100px] relative">
        <ProfileSidebar />
        <section className='p-[20px] pt-[100px] md:pt-10 md:p-10 flex-1 flex-col dark:bg-gray-800 bg-gray-100 overflow-scroll no-scrollbar'>
            {children}
        </section>
    </div>
  )
}

export default DashBoardWrapper