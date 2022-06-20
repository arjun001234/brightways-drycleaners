import { useActionData, useTransition } from "@remix-run/react";
import React from "react";
import { toast } from "react-toastify";
import { ContactError, ContactFormResponse } from "~/types/types";
import { lessRoundedBasicLargeButton } from "~/utils/styles";
import Input from "../ui/input";

const Contact: React.FC = () => {

  const transition = useTransition();

  const data = useActionData<ContactFormResponse>();

  const [formErrors, setFormErrors] = React.useState<ContactError>(data?.validationErrors ? data.validationErrors : {});

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const name = e.target.value
     if (!name) {
       setFormErrors((prev) => ({...prev,name: "name is not provided"}))
     }else if (name.length < 4) {
       setFormErrors((prev) => ({...prev,name: "name too small"}))
     }else {
      setFormErrors((prev) => ({...prev,name: undefined}))
     }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value
     if (!email) {
       setFormErrors((prev) => ({...prev,email: "email is not provided"}))
     }else if (email.length < 5) {
       setFormErrors((prev) => ({...prev,email: "email too small"}))
     }else if (!/\S+@\S+\.\S+/.test(email)) {
      setFormErrors((prev) => ({...prev,email: "invalid email"}))
     }else {
      setFormErrors((prev) => ({...prev,email: undefined}))
     }
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const message = e.target.value
    if (!message) {
      setFormErrors((prev) => ({...prev,message: "message is not provided"}))
    }else if (message.length < 10) {
      setFormErrors((prev) => ({...prev,message: "message too small"}))
    }else {
      setFormErrors((prev) => ({...prev,message: undefined}))
     }
  }

  React.useEffect(() => {
    if(data?.serverError){
      toast.error(data.serverError)
    }
  },[data])

  React.useEffect(() => {
    if (data?.contact){
      toast.success("Message Sent!")
    }
  },[data])

  return (
    <div className="w-full flex flex-col md:flex-row justify-center align-middle overflow-visible">
      <section className="hidden md:flex justify-center items-center md:flex-1">
        <h1>Image Here</h1>
      </section>
      <form
        method="post"
        action="/contact"
        className="md:flex-1 flex flex-col gap-5 overflow-visible"
      >
        <div className="flex flex-col ">
          <h1 className="font-heading font-semibold text-[42px] dark:text-white text-black">Contact Us</h1>
          <p className="font-text font-normal text-[16px] dark:text-white text-black">
            Explore the future with us.
            <br />
            Feel free to get in touch.
          </p>
        </div>
        <Input
          name="name"
          label="Name"
          placeholder="Enter your name here."
          type="text"
          error={formErrors.name}
          handleChange={handleNameChange}
        />
        <Input
          name="contactNumber"
          label="Contact Number"
          placeholder="Enter your number here."
          type="text"
          error={formErrors.contactNumber}
          handleChange={handleEmailChange}
        />
        <Input
          name="message"
          label="Message"
          placeholder="Enter your message here."
          type="text"
          error={formErrors.message}
          handleChange={handleMessageChange}
        />
        <button
          disabled={transition.state === "submitting"}
          className={`${lessRoundedBasicLargeButton} mt-5`}
          type="submit"
        >
          {transition.state === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
