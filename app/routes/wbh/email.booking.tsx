import { ActionFunction, json,Response } from "@remix-run/node";

export const action : ActionFunction = async () => {
    return json({
        message: "Email succesully sent."
    })
    // return new Response(JSON.stringify({
    //     message: "Booking ajgvsjsj"
    // }), {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    // })
}