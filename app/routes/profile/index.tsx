import { ActionFunction, redirect } from "@remix-run/node"
import { Form } from "@remix-run/react"
import { destroySession, getSession } from "~/supabase/session"
import { supabaseAdmin } from "~/supabase/supabase.server"

export const action : ActionFunction = async ({request}) => {
  if (request.method === "POST"){
    const formData = await request.formData()
    const event = formData.get("event")
    if(event === "SIGN_OUT"){
      const sesssion = await getSession(request.headers.get("Cookie"))
      const token = sesssion.get("access_token")
      if(token){
        const {error} = await supabaseAdmin.auth.api.signOut(token)
        if(error){
          console.log(error)
        }else {
          return redirect("/auth",{
            headers: {
              "Set-Cookie": await destroySession(sesssion)
            }
           })
        }
      }
    }
    return null

  }else {
    return null
  }
}


const ProfilePage = () => {

  return (
    <section className='md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-2'>
       <section>
        <Form method="post" action="/profile?index">
          <input className="hidden" name="event" defaultValue="SIGN_OUT" />
          <button type="submit">Logout</button>
        </Form>
       </section>
    </section>
  )
}

export default ProfilePage