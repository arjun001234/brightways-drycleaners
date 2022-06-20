import { twilioClient } from "./client"

export const ContactReplyMessage = async () => {
    await twilioClient.messages.create({
        body: `
        Thanks for reaching out to us.
        We will contact you shortly
        `,
        from: "+19207092910",
        to: "+919821221009"
    })
}