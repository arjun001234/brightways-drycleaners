import { Form, useActionData, useLoaderData, useTransition } from "@remix-run/react";
import React from "react";
import { toast } from "react-toastify";
import { ContactValidationError } from "~/models/contact.model";
import { definitions } from "~/supabase";
import { FormResponse, ContactPageData } from "~/types/types";
import { lessRoundedBasicInput, lessRoundedBasicInputWithBorder, lessRoundedBasicLargeButton } from "~/utils/styles";
import Input from "../ui/input";

const Contact: React.FC = () => {

  const transition = useTransition();

  const data = useActionData<FormResponse<definitions["contacts"],ContactValidationError>>();

  const {image} = useLoaderData<ContactPageData>();

  const [formErrors, setFormErrors] = React.useState<ContactValidationError>(data?.validationErrors ? data.validationErrors : {});

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

  const handleContactNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const contactNumber = e.target.value;
    if(!contactNumber) {
      setFormErrors(prev => ({...prev,contactNumber: "contact number required"}))
    }else if(!/\+?\d[\d -]{8,12}\d/.test(contactNumber)){
      setFormErrors(prev => ({...prev,contactNumber: "invalid contact number"}))
    }else {
      setFormErrors(prev => ({...prev,contactNumber: undefined}))
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
    if(data?.error){
      toast.error(data.error)
    }
  },[data])

  React.useEffect(() => {
    if (data?.success){
      toast.success("Message Sent!")
    }
  },[data])

  return (
    <div className="w-full flex flex-col lg:flex-row justify-center align-middle overflow-visible col-start-1 col-span-full gap-5 lg:gap-10">
      <section className="flex justify-center items-center lg:flex-1 animate-bounce-in-left">
        <img className="h-full w-full rounded-xl" src={image.imageUrl} alt={image.caption} />
      </section>
      <Form
        method="post"
        action="/contact"
        className="lg:flex-1 flex flex-col gap-5 overflow-visible animate-bounce-in-right"
      >
        <div className="flex flex-col ">
          <h1 className="font-heading font-semibold text-[42px] dark:text-white text-black">Contact Us</h1>
        </div>
        <Input
          name="name"
          label="Name"
          placeholder="Enter your name here."
          type="text"
          style={lessRoundedBasicInputWithBorder}
          error={formErrors.name}
          handleChange={handleNameChange}
        />
        <Input
          name="contactNumber"
          label="Contact Number"
          placeholder="Enter your number here."
          type="text"
          style={lessRoundedBasicInputWithBorder}
          error={formErrors.contactNumber}
          handleChange={handleContactNumberChange}
        />
        <Input
          name="message"
          label="Message"
          placeholder="Enter your message here."
          type="text"
          style={lessRoundedBasicInputWithBorder}
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
      </Form>
    </div>
  );
};

export default Contact;
