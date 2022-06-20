import { Contact } from '@prisma/client'
import {ContactError} from '../../types/types'

export const createContact = (formData: FormData) : [ContactError | null,Contact | null] => {
   const name = formData.get("name") as string | null
   const contactNumber = formData.get("contactNumber") as string | null
   const message = formData.get("message") as string | null
   const errors : ContactError = {}
   if (!name) {
     errors.name = "name is not provided"
     return [errors,null]   
   }else {
      if (name.length < 4) {
        errors.name = "name too small"
        return [errors,null]   
      }
   }
   if (!contactNumber) {
    errors.contactNumber = "contactNumber is not provided"
    return [errors,null]   
   }else {
    if (contactNumber.length < 4) {
        errors.contactNumber = "contactNumber too small"
        return [errors,null]   
    }else if (!/\S+@\S+\.\S+/.test(contactNumber)) {
        errors.contactNumber = "contactNumber too small"
        return [errors,null] 
    }
   }

   if (!message) {
    errors.message = "message is not provided"
    return [errors,null]   
    }else {
        if (message.length < 10) {
            errors.message = "message too small"
            return [errors,null]   
        }
    }

    return [null,{
        name: name as string,
        contactNumber: contactNumber as string,
        message: message as string
    }]
}