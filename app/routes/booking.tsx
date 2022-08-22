import { ActionFunction, json} from "@remix-run/node";
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

      const response = await fetch("https://www.google.com/recaptcha/api/siteverify",{
            method: "POST",
            body: JSON.stringify({
                secret: process.env.RECAPTCHA_SECRET_KEY,
                response: input?.gRecaptchaResponse
            })
      })

      if(response.status != 200){
            return json<FormResponse<definitions['bookings'],BookingValidationError>>({
                  validationErrors: {
                        gRecaptchaResponse: "Verification Failed"
                  }
            })
      }

      if(input){
            try {
               await bookingModel.saveToDB(input);
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