import { LoaderFunction, MetaFunction, redirect } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import DashBoardWrapper from '~/components/wrappers/dashboardWrapper'
import { destroySession, getSession } from '~/supabase/session'
import { supabaseAdmin } from '~/supabase/supabase.server'

export const loader : LoaderFunction = async ({request}) => {
  const session = await getSession(request.headers.get("Cookie"))

  if(!session){
    return redirect("/auth")
  }

  const token = session.get("access_token")

  if(!token){
    return redirect("/auth")
  }

  const {error} = await supabaseAdmin.auth.api.getUser(token)

  if(error?.status === 404){
    return redirect("/auth",{
      headers: {
        'Set-Cookie': await destroySession(session)
      }
    })
  }

  return null
}

export const meta: MetaFunction = () => {
  return { title: "Dashboard" };
};

const Dashboard = () => {
  return (
    <DashBoardWrapper>
      <Outlet />
    </DashBoardWrapper>
  )
}

export default Dashboard