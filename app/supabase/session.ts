

// ...

import { createCookieSessionStorage } from "@remix-run/node";

if(!process.env.SESSION_SECRET) throw new Error("SESSION_SECRET not provided")

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    // a Cookie from `createCookie` or the CookieOptions to create one
    cookie: {
      name: "supabase-session",

      // all of these are optional
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secrets: [process.env.SESSION_SECRET],
    },
  });

export { getSession, commitSession, destroySession };