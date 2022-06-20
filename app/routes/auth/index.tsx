import googleIcon from "../../../public/icons/google.png";
import facebookIcon from "../../../public/icons/facebook.png";
import { motion } from "framer-motion";
import { fade } from "~/utils/animations/basicAnim";
import {
  lessRoundedBasicInputWithBorder,
  lessRoundedBasicLargeButton,
} from "~/utils/styles";
import invariant from "tiny-invariant";
import { supabaseAdmin } from "~/supabase/supabase.server";
import { supabaseClient } from "~/supabase/supabase.client";
import { destroySession, getSession } from "~/supabase/session";
import { ActionFunction, json, LoaderFunction } from "@remix-run/node";
import { Form, useActionData, useLoaderData, useSubmit, useTransition } from "@remix-run/react";

export enum LoginMethod {
  GOOGLE = "GOOGLE",
  FACEBOOK = "FACEBOOK",
  EMAIL = "EMAIL",
}

export type AuthActionsData = null | Response

export type AuthDataResponse = {
  error?: {
    message: string
  }
  success? : {
    message: string
  }
}

export const loader: LoaderFunction = async ({request}) => {

  const session = await getSession(request.headers.get("Cookie"));

  const response = {} as AuthDataResponse

  if(session.has("error")){
     response.error = session.get("error")
  }

  return json(response,{
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  })
}

export const action: ActionFunction = async ({ request }) : Promise<AuthActionsData> => {
    if (request.method === "POST"){
      const form = await request.formData();
      const method = form.get("method") as LoginMethod
      invariant(method,"method missing")
      if(method === LoginMethod.EMAIL){
        const email = form.get("email")
        invariant(typeof email === "string","inavlid input")
        if (email.length === 0){
          return json({
            error: {
              message: "email required"
            }
          })
        }
        if(!/\S+@\S+\.\S+/.test(email)){
          return json({
            error: {
              message: "invalid email"
            }
          })
        }
        const {error} = await supabaseAdmin.auth.signIn({
          email: email as string
        },{
          redirectTo: `${process.env.SERVER_URL}/auth/callback`,
        })
        if (error){
          return json({
            error: {
              message: error.message
            }
          })
        }
        return json({
          success: {
            message: "Check your email"
          }
        })
      }
    }
    return null
};

const Login = () => {


  const transition = useTransition()
  const notification = useActionData<AuthDataResponse>();
  const {error} = useLoaderData<AuthDataResponse>()

  const handleGoogleLogin = () => {
    supabaseClient.auth.signIn({
      provider: "google"
    },{
      redirectTo: `http://localhost:3000/auth/callback`
    })
  };

  const handleFacebookLogin = async () => {
    supabaseClient.auth.signIn({
      provider: "facebook"
    },{
      redirectTo: `http://localhost:3000/auth/callback`
    })
  };


  return (
    <motion.section
      variants={fade}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-10 bg-inherit overflow-visible"
    >
      {notification?.error || notification?.success ? (
         <section className={`flex justify-center items-center h-[50px] w-full border-2 ${notification.error ? "border-[#B00020]" : notification.success ? "border-blue" : ""}`}>
          <p className={`text-[16px] font-text font-semibold ${error || notification.error ? "text-[#B00020]" : notification.success ? "text-blue" : ""}`}>
            {notification.success ? notification.success.message : (notification.error ? notification.error.message : null)}
          </p>
        </section>
      ): null}
      {error ? (
         <section className={`flex justify-center items-center h-[50px] w-full border-2 border-[#B00020]`}>
          <p className={`text-[16px] font-text font-semibold text-[#B00020]`}>
            {error.message}
          </p>
        </section>
      ): null}
      <h1 className="font-heading text-[32px] text-center font-bold dark:text-white text-black">
        Login
      </h1>
      <Form method="post" action="/auth?index" className="flex flex-col gap-5 overflow-visible">
        <input
          className={`${lessRoundedBasicInputWithBorder}`}
          type="email"
          placeholder="Your email"
          name="email"
        />
        <input className="hidden" name="method"  defaultValue={LoginMethod.EMAIL} />
        <button
          className={`${lessRoundedBasicLargeButton}`}
          type="submit"
          disabled={transition.state === "submitting"}
        >
          Login
        </button>
      </Form>
      <div className="flex flex-row justify-center items-center gap-2">
        <span className=" bg-gray-400 h-[2px] flex-1"></span>
        <p className=" text-[18px] font-text dark:text-white text-black">or</p>
        <span className=" bg-gray-400 h-[2px] flex-1"></span>
      </div>
      <section className="flex flex-row justify-center gap-5 items-center overflow-visible">
        <button
          disabled={transition.state === "submitting"}
          className={`${lessRoundedBasicLargeButton}`}
          onClick={handleGoogleLogin.bind(null)}
        >
          <img className="h-10 w-10" src={googleIcon} />
        </button>
        <button
          disabled={transition.state === "submitting"}
          className={`${lessRoundedBasicLargeButton}`}
          onClick={handleFacebookLogin.bind(this)}
        >
          <img className="h-10 w-10" src={facebookIcon} />
        </button>
      </section>
    </motion.section>
  );
};

export default Login;
