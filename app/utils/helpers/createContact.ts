import { Contact, ContactValidationError } from '../../types/types'

export const createContact = (formData: FormData): [ContactValidationError | null, Contact | null] => {
    const name = formData.get("name") as string | null
    const contactNumber = formData.get("contactNumber") as string | null
    const message = formData.get("message") as string | null
    const errors: ContactValidationError = {}
    if (!name) {
        errors.name = "name is not provided"
        return [errors, null]
    } else {
        if (name.length < 4) {
            errors.name = "name too small"
            return [errors, null]
        }
    }
    if (!contactNumber) {
        errors.contactNumber = "contactNumber is not provided"
        return [errors, null]
    }

    if (!/\+?\d[\d -]{8,12}\d/.test(contactNumber)) {
        return [{
            contactNumber: "invalid contact number"
        },null]
    }

    if (!message) {
        errors.message = "message is not provided"
        return [errors, null]
    } else {
        if (message.length < 10) {
            errors.message = "message too small"
            return [errors, null]
        }
    }

    return [null, {
        name: name as string,
        contactNumber: contactNumber as string,
        message: message as string
    }]
}