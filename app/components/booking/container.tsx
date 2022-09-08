import { useFetcher } from "@remix-run/react";
import React from "react";
import { toast } from "react-toastify";
import { FormResponse } from "~/types/types";
import {
  lessRoundedBasicInputWithBorder,
  lessRoundedBasicLargeButtonFullWithBg,
  lessRoundedBasicSelectInputWithBorder,
} from "~/utils/styles";
import BackdropContainer from "../containers/backdropContainer";
import Notification from "../containers/notificationContainer";
import { AppContext } from "../context/appContext";
import Input from "../ui/input";
import SelectInput from "../ui/selectInput";
import ReCAPTCHA from "react-google-recaptcha";
import { BookingDto, BookingValidationError } from "~/models/booking.model";

const Container = () => {
  const fetcher =
    useFetcher<FormResponse<BookingDto,BookingValidationError>>();
  const { openBookingModal } = React.useContext(AppContext);
  const [error, setError] = React.useState<string | null>(null);
  const [formErrors, setFormErrors] = React.useState<BookingValidationError>(
    {}
  );
  const [success,setSuccess] = React.useState(false);

  const captchaRef = React.useRef<any>();

  React.useEffect(() => {
    if (fetcher.data) {
      if (fetcher.data.error) {
        setError(fetcher.data.error);
      }
      if (fetcher.data.validationErrors) {
        setFormErrors(fetcher.data.validationErrors);
      }
      if (fetcher.data.success && typeof fetcher.data.success === "string") {
        setSuccess(true);
        // toast("Pickup scheduled successfully",{
        //   type: "success",
        //   position: "bottom-center",
        //   theme: theme === themeType.DARK ? "dark" : "light"
        // })
        // toast("We will contact you shortly",{
        //   type: "info",
        //   position: "bottom-center",
        //   theme: theme === themeType.DARK ? "dark" : "light"
        // })
      }
    }
  }, [fetcher]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length == 0) {
      setFormErrors((prev) => ({ ...prev, name: "name required" }));
    } else if (value.length <= 3) {
      setFormErrors((prev) => ({ ...prev, name: "name too short" }));
    } else {
      setFormErrors((prev) => ({ ...prev, name: undefined }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    if (!email) {
      setFormErrors((prev) => ({ ...prev, email: "email required" }));
    } else if (email.length < 5) {
      setFormErrors((prev) => ({ ...prev, email: "email too small" }));
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setFormErrors((prev) => ({ ...prev, email: "invalid email" }));
    } else {
      setFormErrors((prev) => ({ ...prev, email: undefined }));
    }
  };

  const handleContactNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const contactNumber = e.target.value;
    if (!contactNumber) {
      setFormErrors((prev) => ({
        ...prev,
        contactNumber: "contact number required",
      }));
    } else if (!/^\d{10}$/g.test(contactNumber)) {
      setFormErrors((prev) => ({
        ...prev,
        contactNumber: "invalid contact number",
      }));
    } else {
      setFormErrors((prev) => ({ ...prev, contactNumber: undefined }));
    }
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const address = e.target.value;
    if (!address) {
      setFormErrors((prev) => ({ ...prev, address: "address required" }));
    } else if (address.length < 10) {
      setFormErrors((prev) => ({ ...prev, address: "address too short" }));
    } else {
      setFormErrors((prev) => ({ ...prev, address: undefined }));
    }
  };

  const handlePickUpDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    const selectedDate = new Date(date);
    const now = new Date();

    if (!date) {
      setFormErrors((prev) => ({ ...prev, pickUpDate: "date required" }));
    } else if (selectedDate.getDay() === now.getDay() || selectedDate < now) {
      setFormErrors((prev) => ({
        ...prev,
        pickUpDate: "past and today's date cannot be selected",
      }));
    } else {
      setFormErrors((prev) => ({ ...prev, pickUpDate: undefined }));
    }
  };

  const handleTimeSlotChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const timeSlot = e.target.value;

    if (!timeSlot) {
      setFormErrors((prev) => ({ ...prev, timeSlot: "timeslot required" }));
    } else {
      setFormErrors((prev) => ({ ...prev, timeSlot: undefined }));
    }
  };

  return (
    <BackdropContainer heading="Schedule PickUp" handleClose={() => openBookingModal(false)}>
      {success ? <>
       <section className="flex flex-col gap-5 w-full">
        <h1 className="text-xl font-heading font-bold text-primary text-center">PICK-UP CONFIRMED!</h1>
        <p className="text-base font-text text-gray-700 leading-6 w-full text-center">Thank you for contacting Brightways Drycleaners.</p>
        <p className="text-base font-text text-gray-700 leading-6 w-full  text-center">Our Executive will contact you shortly.</p>
       </section>
      </> :
      <>
        <Notification type="ERROR" message={error ? error : undefined} />
        <fetcher.Form
          method="post"
          action="/booking"
          className="w-full h-full  gap-5 flex flex-col overflow-visible"
        >
          <Input
            type="text"
            label="Full Name"
            name="name"
            placeholder="e.g. xyz"
            error={formErrors.name}
            handleChange={handleNameChange}
            style={lessRoundedBasicInputWithBorder}
          />
          <Input
            type="text"
            label="Email"
            name="email"
            placeholder="e.g. xyz@gmail.com"
            error={formErrors.email}
            handleChange={handleEmailChange}
            style={lessRoundedBasicInputWithBorder}
          />
          <Input
            type="text"
            label="Contact Number"
            name="contactNumber"
            placeholder="e.g. 8010801020"
            error={formErrors.contactNumber}
            handleChange={handleContactNumberChange}
            style={lessRoundedBasicInputWithBorder}
          />
          <Input
            type="text"
            label="Address"
            name="address"
            placeholder="e.g. Shop no. 47, Sector 21A, Faridabad, Haryana 121001"
            error={formErrors.address}
            handleChange={handleAddressChange}
            style={lessRoundedBasicInputWithBorder}
          />
          <Input
            type="date"
            label="PickUp Date"
            name="pickUpDate"
            placeholder="Select date"
            error={formErrors.pickUpDate}
            handleChange={handlePickUpDateChange}
            style={lessRoundedBasicInputWithBorder}
          />
          <SelectInput
            label="Time Slot"
            name="timeSlot"
            error={formErrors.timeSlot}
            handleChange={handleTimeSlotChange}
            style={lessRoundedBasicSelectInputWithBorder}
            options={["10am - 12pm", "12pm - 2pm", "2pm - 4pm", "4pm - 6pm"]}
          />
          <section>
            <ReCAPTCHA
              sitekey={window.env.RECAPTCHA_SITE_KEY} 
              ref={captchaRef}
            />
            {formErrors.gRecaptchaResponse && <p className="text-[#FF0000]">Verification Failed</p>}
          </section>
          <button disabled={fetcher.state === "submitting"} className={`${lessRoundedBasicLargeButtonFullWithBg}`}>
            {fetcher.state === "submitting" ? "Booking..." : "Confirm Booking"}
          </button>
        </fetcher.Form>
      </>}
    </BackdropContainer>
  );
};

export default Container;
