import React from "react";
import { BiSupport } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import gmail from "../../../public/icons/gmail.png";
import whatsapp from "../../../public/icons/whatsapp.png";
import { AiOutlineArrowUp } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { Link } from "@remix-run/react";

const SideBar: React.FC = () => {
  
  // const [showList, setShowList] = React.useState(false);

  return (
    <div className="group fixed right-[30px] bottom-[30px] gap-2 z-50 flex flex-col h-auto w-auto">
      {/* <section
        onClick={() => setShowList((prev) => !prev)}
        className={`bg-slate-100 dark:bg-gray-800  h-16 w-16 flex justify-center items-center rounded-[50%] hover:scale-110 ${
          showList ? "opacity-100 scale-100" : "opacity-0 scale-0"
        } transition-all duration-500 delay-400`}
      >
        <AiOutlineArrowUp
          className="h-8 w-8 text-blue"
          onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
        />
      </section> */}
      {/* <section
        className={`bg-slate-100 dark:bg-gray-800 h-16 w-16 flex justify-center items-center rounded-[50%] ${
          showList ? "opacity-100 scale-100" : "opacity-0 scale-0"
        } transition-all duration-500 delay-300`}
      >
        <a
          target="_blank"
          href={`mailto:brightwaysdryclean@gmail.com`}
          className=""
        >
          <img className="h-8 w-8" src={gmail} />
        </a>
      </section> */}
      <section
        className={`bg-slate-100 dark:bg-gray-800 h-16 w-16 flex justify-center items-center rounded-[50%] transition-all duration-500 delay-200`}
      >
        <a
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=919810136709&text=hi%20i%20would%20like%20to%20chat%20with%20you."`}
          className=""
        >
          <img className="h-8 w-8" src={whatsapp} />
        </a>
      </section>
      <section
        className={`bg-slate-100 dark:bg-gray-800 h-16 w-16 flex justify-center items-center rounded-[50%] transition-all duration-500 delay-100`}
      >
        <a target="_blank" href={`tel:+919810136709`} className="">
          <BsFillTelephoneFill className="h-8 w-8 text-primary" />
        </a>
      </section>
      {/* <section
        onClick={() => setShowList((prev) => !prev)}
        className="bg-slate-100 dark:bg-gray-800 text-black dark:text-white h-16 w-16 flex justify-center items-center rounded-[50%]"
      >
        {showList ? <MdClose className="h-8 w-8" /> :
        <BiSupport className="h-8 w-8" />}
      </section> */}
    </div>
  );
};

export default SideBar;
