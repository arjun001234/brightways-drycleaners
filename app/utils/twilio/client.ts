import client from 'twilio'

if (!process.env.TWILIO_ACCOUNT_SID){
    throw new Error("TWILIO_ACCOUNT_SID not provided.")
}

if (!process.env.TWILIO_AUTH_TOKEN){
    throw new Error("TWILIO_AUTH_TOKEN not provided.")
}

export const twilioClient = client(process.env.TWILIO_ACCOUNT_SID,process.env.TWILIO_AUTH_TOKEN)