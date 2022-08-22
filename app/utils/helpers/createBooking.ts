import { definitions } from "~/supabase";
import { BookingValidationError } from "~/types/types";

export const createBooking = (formData: FormData) : [Omit<definitions['bookings'],"id" | "created_at"> | null,BookingValidationError | null] => {
    const name = formData.get("name") as string | null
    const contactNumber = formData.get("contactNumber") as string | null
    const email = formData.get("email") as string | null
    const address = formData.get("address") as string | null
    const pickUpDate = formData.get("pickUpDate") as string | null
    const timeSlot = formData.get("timeSlot") as definitions['bookings']['time_slot'] | null

    if(!name){
      return [null,{
        name: "name required"
      }]
    }

    if(!contactNumber){
        return [null,{
            name: "contact number required"
        }]
    }

    if(!email){
        return [null,{
            email: "email required"
        }]
    }

    if(!address){
        return [null,{
            address: "address required"
        }]
    }

    if(!pickUpDate){
        return [null,{
            pick_up_date: "pickup date required"
        }]
    }

    if(!timeSlot){
        return [null,{
            time_slot: "time slot required"
        }]
    }

    if(name.length < 4){
        return [null,{
            name: "name is too short"
        }]
    }

    if(!/\S+@\S+\.\S+/.test(email)){
        return [null,{
            email: "inavlid email"
        }]
    }

    if(!/\+?\d[\d -]{8,12}\d/.test(contactNumber)){
        return [null,{
            contact_number: "invalid contact number"
        }]
    }

    const selectedDate = new Date(pickUpDate);
    const now = new Date();

    if(selectedDate < now){
        return [null,{
            pick_up_date: "past date cannot be selected"
        }]
    }

    return [{
        name: name,
        email: email,
        contact_number: contactNumber,
        address: address,
        pick_up_date: pickUpDate,
        time_slot: timeSlot
    },null]
}