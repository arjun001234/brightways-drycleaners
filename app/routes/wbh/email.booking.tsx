import { ActionFunction, json,Response } from "@remix-run/node";
import { provider } from "~/aws/ses/emails/emailProvider";

export const action : ActionFunction = async () => {

    await provider.sendEmail("arjunkanojia001@gmail.com");

    return json({
        message: "Booking ajgvsjsj"
    })
    // return new Response(JSON.stringify({
    //     message: "Booking ajgvsjsj"
    // }), {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    // })
}