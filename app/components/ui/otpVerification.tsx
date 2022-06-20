import React, { ChangeEvent } from "react";
import { motion } from "framer-motion";
import { horizontalAnim } from "~/utils/animations/basicAnim";

type otpVerficationProps = {
  handleVerification: (e: React.SyntheticEvent) => void;
};

const OtpVerfication: React.FC<otpVerficationProps> = ({
  
}) => {
  const [otp, setOtp] = React.useState<string>("");
  const num1 = React.useRef<HTMLInputElement | null>(null);
  const num2 = React.useRef<HTMLInputElement | null>(null);
  const num3 = React.useRef<HTMLInputElement | null>(null);
  const num4 = React.useRef<HTMLInputElement | null>(null);
  const num5 = React.useRef<HTMLInputElement | null>(null);
  const num6 = React.useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (!/\d/.test(e.target.value)) {
        e.target.style.border = "2px solid red"
        return
    }else {
        e.target.style.border = "none"
        setOtp(prev => prev + value)
        switch (e.currentTarget.name) {
            case "1":
            if (value.length === 1){
                num2.current!.focus()
            }
              break;
            case "2":
              if (value.length === 0){
                  num1.current!.focus()
              }else {
                  num3.current!.focus()
              }
              break;
      
            case "3":
              if (value.length === 0){
                  num2.current!.focus()
              }else {
                  num4.current!.focus()
              }
              break;
      
            case "4":
              if (value.length === 0){
                  num3.current!.focus()
              }else {
                  num5.current!.focus()
              }
              break;
      
            case "5":
              if (value.length === 0){
                  num4.current!.focus()
              }else {
                  num6.current!.focus()
              }
              break;
            case "6":
                if (value.length === 0){
                    num5.current!.focus()
                }
              break;
        }
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    // e.preventDefault()
    // console.log(otp,otp.length,confirmationFunction)
    // if (otp.length === 6 && confirmationFunction != null) {
    //     confirmationFunction.confirm(otp).then(res => console.log(res)).catch(err => console.log(err))
    // }else {
        
    // }
  }

//   React.useEffect(() => {
//     if (confirmationFunction && otp.length === 6) {
        
//     }
//   }, [otp, confirmationFunction]);

  return (
    <motion.form
      className="absolute flex flex-col gap-10  justify-center h-full w-full left-0 right-0 top-0 bottom-0 bg-white"
      variants={horizontalAnim}
      initial="hidden"
      animate="visible"
      custom={["100%", "0%"]}
      onSubmit={handleSubmit.bind(null)}
    >
      <section className="flex flex-row gap-2 items-center justify-center z-20 overflow-visible">
        <input
          ref={num1}
          name="1"
          className="flex justify-center items-center p-2 px-auto text-center placeholder:text-center rounded-md border-none outline-none font-text text-[18px] bg-[#eee] invalid:border-2 invalid:border-error-red"
          required
          type="text"
          maxLength={1}
          placeholder="-"
          onChange={handleChange.bind(null)}
        />
        <input
          ref={num2}
          name="2"
          className="flex justify-center items-center p-2 px-auto text-center placeholder:text-center rounded-md border-none outline-none font-text text-[18px] bg-[#eee] invalid:border-2 invalid:border-error-red"
          required
          type="text" 
          maxLength={1}
          placeholder="-"
          onChange={handleChange.bind(null)}
        />
        <input
          ref={num3}
          name="3"
          className="flex justify-center items-center p-2 px-auto text-center placeholder:text-center rounded-md border-none outline-none font-text text-[18px] bg-[#eee] invalid:border-2 invalid:border-error-red"
          required
          type="text"
          maxLength={1}
          placeholder="-"
          onChange={handleChange.bind(null)}
        />
        <input
          ref={num4}
          name="4"
          className="flex justify-center items-center p-2 px-auto text-center placeholder:text-center rounded-md border-none outline-none font-text text-[18px] bg-[#eee] invalid:border-2 invalid:border-error-red"
          required
          type="text"
          maxLength={1}
          placeholder="-"
          onChange={handleChange.bind(null)}
        />
        <input
          ref={num5}
          name="5"
          className="flex justify-center items-center p-2 px-auto text-center placeholder:text-center rounded-md border-none outline-none font-text text-[18px] bg-[#eee] invalid:border-2 invalid:border-error-red"
          required
          type="text"
          maxLength={1}
          placeholder="-"
          onChange={handleChange.bind(null)}
        />
        <input
          ref={num6}
          name="6"
          className="flex justify-center items-center p-2 px-auto text-center placeholder:text-center rounded-md border-none outline-none font-text text-[18px] bg-[#eee] invalid:border-2 invalid:border-error-red"
          required
          type="text"
          maxLength={1}
          placeholder="-"
          onChange={handleChange.bind(null)}
        />
      </section>
      <button
        type="submit"
        className="px-4 py-2 rounded-md border-none outline-none font-text text-[18px] text-white bg-blue overflow-visible"
      >
        Verify
      </button>
    </motion.form>
  );
};

export default OtpVerfication;
