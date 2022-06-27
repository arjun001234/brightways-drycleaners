import { definitions } from "~/supabase";
import { ProfileValidationError } from "~/types/types";

export const createProfile = (formData: FormData) : [Pick<definitions['profiles'],"name" | "contactNumber"> | null,ProfileValidationError | null] => {
    const name = formData.get("name") as string | null
    const contactNumber = formData.get("contactNumber") as string | null

    if(!name){
      return [null,{
        name: "name is required"
      }]
    }

    if(!contactNumber){
        return [null,{
            name: "contact number is required"
        }]
    }

    if(name.length < 4){
        return [null,{
            name: "name is too short"
        }]
    }

    if(!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(contactNumber)){
        return [null,{
            name: "invalid contact number"
        }]
    }

    return [{
        name,
        contactNumber
    },null]
}