import {createTransport} from "nodemailer"

export const transporter = createTransport({
    service: "gmail",
    auth: {
        type: "OAUTH2",
        user: "arjun@brightwaysdrycleaners.com",
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        accessToken: process.env.GOOGLE_ACCESS_TOKEN,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN
    }
})
