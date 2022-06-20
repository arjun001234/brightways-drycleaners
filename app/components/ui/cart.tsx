import React from "react";
import { BsBag } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { CartContext, CartContextType } from "../context/cartContext";

type cartProps = {
    open: boolean,
    handleOpen: () => void
}

const Cart : React.FC<cartProps> = ({open,handleOpen}) => {

  const {getTotalItems} = React.useContext(CartContext) as CartContextType;

  return (
    <section
      onClick={handleOpen.bind(null)}
      className=" overflow-visible fixed right-10 bottom-10 bg-blue rounded-full h-12 w-12 flex items-center justify-center"
    >
      {!open && (
        <div className="absolute h-6 w-6 flex items-center justify-center right-[-7px] top-[-7px] rounded-full bg-white">
          <p className="font-text text-[14px] text-blue font-bold">{getTotalItems()}</p>
        </div>
      )}
      {open ? <CgClose color="#fff" /> : <BsBag color="#fff" />}
    </section>
  );
};

export default Cart;
