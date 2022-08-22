import { ActionFunction, json,Response } from "@remix-run/node";

export const action : ActionFunction = () => {
    return json({
        message: "Booking ajgvsjsj"
    })
    return new Response(JSON.stringify({
        message: "Booking ajgvsjsj"
    }), {
        headers: {
          "Content-Type": "application/json",
        },
    })
}