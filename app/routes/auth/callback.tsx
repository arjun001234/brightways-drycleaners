import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { useSubmit, useTransition } from "@remix-run/react";
import { ApiError, AuthChangeEvent, Session } from "@supabase/supabase-js";
import React from "react";
import { commitSession, getSession } from "~/supabase/session";
import { supabaseClient } from "~/supabase/supabase.client";

export const action: ActionFunction = async ({ request }) => {

  const formData = await request.formData();
  const session = await getSession(request.headers.get("Cookie"));


  let error = JSON.parse(formData.get("error") as string) as ApiError | null
  if(error){
    console.log(error)
    session.flash("error", {
      message: "Something went wrong",
    });
    return redirect("/auth", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }
  let supaSession = JSON.parse(formData.get("session") as string) as Session | null;
  let event = JSON.parse(formData.get("event") as string) as AuthChangeEvent | null;

  if (event === null || supaSession === null) {
    session.flash("error", {
      message: "Something went wrong",
    });
    return redirect("/auth", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  if(event === "SIGNED_IN"){
    session.set("access_token", supaSession?.access_token);
    console.log("inside signedin switch case")
    return redirect("/", {
      headers: {
        "Set-Cookie": await commitSession(session,{expires: new Date(supaSession.expires_at!),maxAge: supaSession.expires_in}),
      },
    });
  }

  return null;
};

const Callback = () => {
  
  const submit = useSubmit();
  const transition = useTransition();

  React.useEffect(() => {
    const { data,error } = supabaseClient.auth.onAuthStateChange((event, session) => {
      const formData = new FormData();
      formData.set("session", JSON.stringify(session));
      formData.set("event", JSON.stringify(event));
      submit(formData, {
        method: "post",
      });
    });

    if(error){
      const formData = new FormData()
      formData.set("error",JSON.stringify(error))
      submit(formData, {
        method: "post",
      });
    }

    return () => {
      data?.unsubscribe();
    };
  }, []);

  return <div className="w-full flex justify-center items-center">
     {transition.state === "loading" && <div className=" inline-block w-[50px] h-[50px] after:contents-[''] after:block after:h-[40px] after:w-[40px] after:m-[5px] after:rounded-[50%] after:border-2 after:border-t-blue after:animate-spin overflow-visible" ></div>}
  </div>;
};

export default Callback;
