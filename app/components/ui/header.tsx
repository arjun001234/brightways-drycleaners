import React from "react";
import { BsList } from "react-icons/bs";
import {LayoutPageData} from "~/types/types";
import {BsLightbulb,BsLightbulbFill} from 'react-icons/bs'
import { AppContext, themeType } from "../context/appContext";
import { basicButton } from "~/utils/styles";
import { Link, useLoaderData, useLocation } from "@remix-run/react";
import { AiOutlineClose } from "react-icons/ai";
import { ThemeContext } from "../context/themeContext";

type headerPropType = {
  pathname: string
};

const Header: React.FC<headerPropType> = () => {

  const location = useLocation()
  const {user,isAuthenticated} = React.useContext(AppContext);
  const {setAppTheme,theme} = React.useContext(ThemeContext)
  const {header}  = useLoaderData<LayoutPageData>()
  const [open,setOpen] = React.useState(false);
  const [visible,setVisible] = React.useState(false);
  const [onTop,setOnTop] = React.useState(true);
  const {logo,nav} = header

  const isCurrentPage = (path: string) : boolean => {
    if(path === location.pathname){
      return true
    }
    return false
  }

  React.useEffect(() => {
    let lastYScroll = window.pageYOffset
    const handleScroll = () => {
      const currYScroll = window.pageYOffset
      if (currYScroll  > 100) {
        const direction =  currYScroll > lastYScroll ? "down" : "up"
        direction === "down" ? setVisible(true) : setVisible(false)
        onTop ? setOnTop(false) : null
        lastYScroll = direction === "down" ? currYScroll - 5 : currYScroll + 5
      }else {
        setOnTop(true)
      }
    }
    window.addEventListener("scroll",handleScroll)
    return () => window.removeEventListener("scroll",handleScroll)
  },[])

return (
  <header className={`${visible ? "-translate-y-full" : "translate-y-0"} fixed top-0 left-0 right-0 h-[100px] flex flex-row items-center justify-between z-40 overflow-visible transition-transform duration-300 md:overflow-hidden px-[20px] md:px-[50px] dark:bg-gray-900 bg-white`}>
     <section className="flex-1 md:flex-none">
       <img className="h-5 w-auto bg-cover" src={logo.imageUrl} alt={logo.alt}  />
     </section>
     <ul className={`${open ? "scale-100 opacity-100 " : " scale-0 opacity-0 md:scale-100 md:opacity-100"} fixed top-0 left-0 right-0 h-[100vh] flex flex-col items-center justify-center transition-all duration-500 md:static md:flex-row md:bg-[transparent] md:w-auto md:h-auto md:overflow-hidden md:gap-3 md:px-5 dark:bg-gray-900 bg-white z-30`}>
       <AiOutlineClose
        className="md:hidden dark:fill-white fill-black absolute right-[20px] top-[20px] h-[40px] w-[40px]" onClick={() => setOpen(false)} />
       {nav.map((link) => {
         return <li className={` group py-4 w-[80%] font-text font-[18px] font-bold flex flex-col gap-1 justify-center items-center rounded-md transition-all duration-300 dark:text-white text-black md:text-gray-400  md:p-2 md:w-auto md:overflow-visible md:font-medium`} key={link._key}><Link to={link.to} onClick={() => setOpen(false)}>{link.name}</Link><span className={`${isCurrentPage(link.to) ? "w-full" : "w-0"}  group-hover:w-full hidden md:flex h-[4px] transition-all bg-blue duration-100`}></span></li>
       })}
       <li className={` py-4 w-[80%] md:hidden font-text font-[18px] font-bold flex flex-col gap-1 justify-center items-center rounded-md transition-all duration-300 dark:text-white text-black md:text-gray-400 md:p-2 md:w-auto md:overflow-visible md:font-medium`}><Link to="/login" onClick={() => setOpen(false)}>Login</Link></li>
     </ul>  
     <section className="flex items-center gap-4 overflow-visible z-20">
        <div className={`relative h-[40px] w-[40px] rounded-[50px] border-gray-400  border-2  font-text font-medium flex justify-center items-center`}>
          <BsLightbulb className={`dark:fill-white fill-black scale-110 left-[11px] ${theme === themeType.DARK ? "opacity-100 absolute" : "opacity-0 hidden"}`} onClick={() => setAppTheme(themeType.LIGHT)} />
          <BsLightbulbFill className={`dark:fill-white fill-black scale-110 left-[11px] ${theme === themeType.LIGHT ? "opacity-100 absolute" : "opacity-0 hidden"}`} onClick={() => setAppTheme(themeType.DARK)} />
        </div>
        {isAuthenticated && user ? <div className={`${basicButton} hidden md:flex`}><Link to="/profile" >Profile</Link></div> :
        <div className={`${basicButton} hidden md:flex`}><Link to={"/auth"}>Login</Link></div>}
     </section>
     <section className="flex justify-center items-center md:hidden ml-3 z-20">
       <BsList style={{height: "40px",width: "40px"}} className="dark:fill-white fill-black" onClick={() => setOpen(true)} />
     </section>
  </header>
)
};

export default Header;
