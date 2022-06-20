import { Link } from '@remix-run/react'

const ProfileSidebar = () => {
  return (
    <div className='md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 border-r-2 border-gray-400 '>
      <ul className='w-full h-full flex flex-col'>
        <li className='h-[60px] flex justify-center items-center bg-inherit dark:text-white text-black font-text font-medium text-[18px]'><Link to="/profile">Profile</Link></li>
        <li className='h-[60px] flex justify-center items-center bg-inherit dark:text-white text-black font-text font-medium text-[18px]' ><Link to="/profile/bookings">Bookings</Link></li>
        <li className='h-[60px] flex justify-center items-center bg-inherit dark:text-white text-black font-text font-medium text-[18px]'><Link to="/profile/reviews">Reviews</Link></li>
        <li className='h-[60px] flex justify-center items-center bg-inherit dark:text-white text-black font-text font-medium text-[18px]'><Link to="/profile/feedbacks">Feedback</Link></li>
      </ul>
    </div>
  )
}

export default ProfileSidebar