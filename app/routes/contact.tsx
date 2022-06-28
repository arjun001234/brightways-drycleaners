import Contact from '~/components/contact/contact'
import { createContact } from '~/utils/helpers/createContact'
import InfoWrapper from '~/components/wrappers/infoWrapper'
import { ActionFunction, json, MetaFunction } from '@remix-run/node'
import { supabaseAdmin } from '~/supabase/supabase.server'

export const action: ActionFunction = async ({request}) => {

  const formData = await request.formData()
  console.log(formData)
  let [errors,contact] = createContact(formData)
  if (errors) {
    return json({
      validationErrors: errors
    })
  }
  if (contact){
    try {
      const {error} = await supabaseAdmin.from("contacts").insert([{name: contact.name,contactNumber: contact.contactNumber,message: contact.message}])
      if(error){
        console.log(error)
        return json({
          error: "Failed to send message"
        })
      }
    } catch (error) {
      return json({
        error: "Failed to send message"
      })
    }

    return json({
      success: "Message Sent"
    })
  }
  return json({
    error: "Something went wrong"
  })
}

export const meta : MetaFunction = () => {
  return {
    title: "Contact",
    description: "Contact page of Brightways Drycleaners",
    keywords: "Brightways,Drycleaners"
  }
}

const ContactPage = () => {

  return (
    <InfoWrapper id="contact">
    <Contact />
    </InfoWrapper>
  )
}

export default ContactPage