import { ActionFunction, ErrorBoundaryComponent, json, redirect } from "@remix-run/node"
import { Form ,Link,Outlet,useActionData,useNavigate, useTransition } from "@remix-run/react"
import React from "react"
import { AppContext } from "~/components/context/appContext"
import { destroySession, getSession } from "~/supabase/session"
import { supabaseAdmin } from "~/supabase/supabase.server"
import { lessRoundedBasicInput, lessRoundedBasicInputWithBorder, lessRoundedBasicLargeButton, lessRoundedBasicLargeButtonFull } from "~/utils/styles"
import {MdAdd} from 'react-icons/md'
import {AiOutlineHome} from 'react-icons/ai'
import { FaRegUser } from "react-icons/fa"
import { definitions } from "~/supabase"
import Input from "~/components/ui/input"
import { FormResponse, ProfileValidationError, ReviewValidationError } from "~/types/types"
import { createProfile } from "~/utils/helpers/createProfile"

export const action : ActionFunction = async ({request}) => {
    const formData = await request.formData()
    const event = formData.get("event")
    const session = await getSession(request.headers.get("Cookie"))
    const token = session.get("access_token")
    if(event === "SIGN_OUT"){
      if(token){
        const {error} = await supabaseAdmin.auth.api.signOut(token)
        if(error){
          console.log(error)
        }else {
          session.flash("error", {
            message: "Logout out successfully",
          });
          return redirect("/auth",{
            headers: {
              "Set-Cookie": await destroySession(session)
            }
           })
        }
      }
    }

    if(event === "UPDATE_USER"){
       const [profile,error] = createProfile(formData)
       if(error){
        return json({
          validationError: error
        })
       }
      const profileResponse = await supabaseAdmin.from<definitions['profiles']>("profiles").update({name: profile?.name,contactNumber: profile?.contactNumber})
      if(profileResponse.error){
        console.log(profileResponse.error)
        return json({
          error: profileResponse.error.message
        })
      }

      return json({
        success: profileResponse.data
      })
    }

    if(event === "DELETE_USER"){

    }

    return null
}


const ProfilePage = () => {

  const navigate = useNavigate()
  const data = useActionData<FormResponse<definitions['profiles'],ProfileValidationError>>()
  const tranistion = useTransition()
  const {user,isAuthenticated,setProfile,profile} = React.useContext(AppContext)
  const [validationError,setValidationError] = React.useState<ProfileValidationError>(data?.validationErrors ? data.validationErrors : {})

  React.useEffect(() => {
    if(data?.success){
      setProfile(data.success)
    }
  },[])

  if(!isAuthenticated || !user){
    navigate("/login")
    return null
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      if(value.length < 4){
        setValidationError(prev => ({...prev,name: "name is too short"}))
      }else {
        setValidationError(prev => ({...prev,name: undefined}))
      }
  }

  const handleContactNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if(!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value)){
      setValidationError(prev => ({...prev,contactNumber: "inavlid contact number"}))
    }else {
      setValidationError(prev => ({...prev,contactNumber: undefined}))
    }
  }

  return (
    <div className='flex flex-col gap-20 overflow-visible'>
      {/* <section className="flex justify-center items-center h-auto">
        <img className="h-[100px] w-[100px] rounded-[50%]" alt="user-avatar" src={extractAvatar(user.user_metadata)} />
      </section> */}
      <section className="flex flex-col gap-10 overflow-visible">
       <div className="flex justify-start items-center gap-3">
          <FaRegUser className="dark:fill-white fill-black h-10 w-10" />
          <h1 className=" font-heading font-medium dark:text-white text-black text-[24px]">Details</h1>
        </div>
        <Form method="post" className="flex flex-col gap-5 items-start overflow-visible">
          <Input type="text" name="name" label="Name" placeholder="Your Name" error={validationError.name} handleChange={handleNameChange}  defaultValue={profile?.name} style={lessRoundedBasicInput} />
          <Input  defaultValue={user.email} type="text" name="email" label="Email" placeholder="Your Email" handleChange={() => {}} error={undefined} style={lessRoundedBasicInput}  />
          <Input  defaultValue={profile?.contactNumber ? profile.contactNumber : ""} type="text" name="contactNumber" label="Contact Number" placeholder="Your contact number" handleChange={handleContactNumberChange} error={validationError.contactNumber} style={lessRoundedBasicInput}/>
          <input className="hidden" name="event" defaultValue="UPDATE_USER" />
          <button disabled={tranistion.state === "submitting" && Object.keys(validationError).length > 0} className={`${lessRoundedBasicLargeButtonFull}`}>Save</button>
        </Form>
      </section>
      <section className="flex flex-col gap-10 overflow-visible">
        <div className="flex justify-start items-center gap-3">
          <AiOutlineHome className="dark:fill-white fill-black h-10 w-10" />
          <h1 className=" font-heading font-medium dark:text-white text-black text-[24px]">Address</h1>
        </div>
        <Outlet />
        <button className={`${lessRoundedBasicLargeButton} flex justify-center items-center`}><Link to="/dashboard/profile/newAddress">New Address</Link><MdAdd className="dark:fill-white fill-black ml-3 h-5 w-5" /></button>
      </section>
      <section className="flex flex-col md:flex-row justify-center items-center gap-5 mt-[50px] w-full overflow-visible">
        <Form method="post" className="w-full md:w-auto overflow-visible">
          <input className="hidden" name="event" defaultValue="SIGN_OUT" />
          <button className={`${lessRoundedBasicLargeButton}`} type="submit">Logout</button>
        </Form>
        <Form method="post" action="/profile?index" className="w-full md:w-auto overflow-visible">
          <input className="hidden" name="event" defaultValue="DELETE_USER" />
          <button className={`${lessRoundedBasicLargeButton}`} type="submit">Delete Account</button>
        </Form>
       </section>
    </div>
  )
}

export const ErrorBoundary : ErrorBoundaryComponent = ({error}) => {
   return <div>
    <h1>Something went wrong</h1>
   </div>
}

export default ProfilePage