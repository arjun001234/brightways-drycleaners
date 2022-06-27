import { Outlet } from "@remix-run/react";
import { AnimatePresence } from "framer-motion";
import InfoWrapper from "~/components/wrappers/infoWrapper";

const Auth = () => {

  return (
   <InfoWrapper id="auth">
      <main className="md:bg-inherit md:dark:bg-gray-800 md:bg-gray-100 md:p-10  h-auto overflow-visible col-start-1 col-span-full lg:col-start-4 lg:col-end-10">
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
      </main>
    </InfoWrapper> 
  );
};

export default Auth;
