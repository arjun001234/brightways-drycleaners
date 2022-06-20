import Contact from '~/components/contact/contact'
import {ContactFormResponse} from '../types/types'
import { createContact } from '~/utils/helpers/createContact'
import InfoWrapper from '~/components/wrappers/infoWrapper'
import { ActionFunction, json, MetaFunction } from '@remix-run/node'
import { client } from '~/prisma/client'

export const action: ActionFunction = async ({request}) => {

  const formData = await request.formData()
  let [errors,contact] = createContact(formData)
  if (errors) {
    return json({
      validationErrors: errors
    })
  }
  if (contact){
    try {
      contact = await client.contact.create({data: contact})
    } catch (error) {
      return json({
        error: "Failed to send message"
      })
    }
  }
  return json({
    contact: Contact
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
    <InfoWrapper>
    <Contact />
    </InfoWrapper>
  )
}

export default ContactPage