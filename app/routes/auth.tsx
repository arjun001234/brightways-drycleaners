import { Outlet } from "@remix-run/react";
import { AnimatePresence } from "framer-motion";
import InfoWrapper from "~/components/wrappers/infoWrapper";

const Auth = () => {

  return (
   <InfoWrapper>
      <main className="md:bg-inherit md:dark:bg-gray-800 md:bg-gray-100 md:p-10 w-full md:w-[400px] h-auto overflow-visible">
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
      </main>
    </InfoWrapper> 
  );
};

export default Auth;
