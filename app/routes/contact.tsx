import Contact from "~/components/contact/contact";
import { createContact } from "~/utils/helpers/createContact";
import InfoWrapper from "~/components/wrappers/infoWrapper";
import { ActionFunction, json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { supabaseAdmin } from "~/supabase/supabase.server";
import { getImageByName } from "~/sanity/query/getImageByName.server";
import { ContactPageData, FormResponse } from "~/types/types";
import bookingModel from "~/models/booking.model";
import contactModel, { ContactValidationError } from "~/models/contact.model";
import { definitions } from "~/supabase";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  let [errors,input] = await contactModel.ValidateInput(formData)
  if (errors) {
    return json<FormResponse<definitions['contacts'],ContactValidationError>>({
      validationErrors: errors
    })
  }
  if (input) {
    try {
      await contactModel.saveToDB(input);
      return json<FormResponse<definitions['contacts'],ContactValidationError>>({
         success: "Message Success"
      })
   } catch (error) {
         return json<FormResponse<definitions['contacts'],ContactValidationError>>({
               error: "Failed to book"
         }) 
   }
  }
  return json<FormResponse<definitions['contacts'],ContactValidationError>>({
    error: "Something went wrong"
  })
};

export const loader : LoaderFunction = async () => {
  const image = await getImageByName("contact");

  if(!image){
    throw new Error("Something went wrong!")
  }

  return json<ContactPageData>({
    image: image
  })
}

export const meta: MetaFunction = () => {
  return {
    title: "Contact",
    description: "Brightways Dry cleaners is providing you the best dry cleaning services in Faridabad for 50+ years. For any query call us or WhatsApp us on 8010801020"
  };
};

const ContactPage = () => {
  return (
    <InfoWrapper id="contact">
      <Contact />
    </InfoWrapper>
  );
};

export default ContactPage;
