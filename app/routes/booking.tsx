import { ActionFunction, json} from "@remix-run/node";
import { provider } from "~/aws/ses/emails/emailProvider";
import bookingModel, { BookingValidationError } from "~/models/booking.model";
import { definitions } from "~/supabase";
import { FormResponse } from "~/types/types";

export const action : ActionFunction = async ({request}) => {
      const formData = await request.formData();
      let [errors,input] = await bookingModel.ValidateInput(formData)

      if(errors){
            return json<FormResponse<definitions['bookings'],BookingValidationError>>({
                  validationErrors: errors
            })
      }

      const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${input?.gRecaptchaResponse}`,{
            method: "POST"
      })

      const data = await response.json()

      if(!data.success){
            return json<FormResponse<definitions['bookings'],BookingValidationError>>({
                  validationErrors: {
                        gRecaptchaResponse: "Verification Failed"
                  }
            })
      }

      if(input){
            try {
               await bookingModel.saveToDB(input);
               await provider.sendBookingConfirmationEmailToCustomer(input);
               await provider.sendBookingConfirmationEmailToOwner(input);
               return json<FormResponse<definitions['bookings'],BookingValidationError>>({
                  success: "Booking Successful"
               })
            } catch (error) {
               return json<FormResponse<definitions['bookings'],BookingValidationError>>({
                        error: "Failed to book"
               }) 
            }
      }

      return json<FormResponse<definitions['bookings'],BookingValidationError>>({
            error: "Something went wrong"
      })
}