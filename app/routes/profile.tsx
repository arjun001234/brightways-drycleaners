import { Outlet } from '@remix-run/react'
import ProfileSidebar from '~/components/profile/sidebar'
import InfoWrapper from '~/components/wrappers/infoWrapper'

const ProfilePage = () => {
  return (
    <InfoWrapper>
        <div className="grid min-h-full h-auto w-full dark:bg-gray-800 bg-slate-100 border-2 boder-gray-400">
        <ProfileSidebar />
        <Outlet />
        </div>
    </InfoWrapper>
  )
}

export default ProfilePage