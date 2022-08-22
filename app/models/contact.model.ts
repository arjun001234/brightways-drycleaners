import { IsDefined, IsMobilePhone, Length, validate, ValidationError } from "class-validator";
import { definitions } from "~/supabase";
import { supabaseAdmin } from "~/supabase/supabase.server";
import { IsValidFormValue } from "./booking.model";

export class ContactDto {
    @Length(3, 20)
    @IsDefined()
    @IsValidFormValue({message: "Name Required"})
    name: string = "";

    @IsDefined()
    @IsMobilePhone()
    @IsValidFormValue({message: "Contact Number Required"})
    contactNumber: string = "";

    @Length(5, 200)
    @IsDefined()
    @IsValidFormValue({message: "Message Required"})
    message: string = "";
}

export type ContactValidationError = Partial<typeof ContactDto["prototype"]>

class Contact {
    private static instance: Contact
    static getInstance() : Contact {
        if(this.instance){
            return this.instance
        }
        this.instance = new Contact()
        return this.instance
    }
    public async ValidateInput(input: FormData) : Promise<[ContactValidationError | null,ContactDto | null]> {
        const data = new ContactDto()
        for (const pair of input.entries()) {
            const key = this.makeKey(pair[0]) as keyof ContactDto
            if (key in data){
                data[key] = pair[1] as any;
            }
        }
        let validationErrors : ValidationError[] = await validate(data)
        if(validationErrors.length !== 0){
            const errors = this.mapErrors(validationErrors)
            return [errors,null]
        }
        return [null,data]
    }
    private makeKey(key: string) : string {
        for (var i = 0; i < key.length; i++) {
            if(/-|_/.test(key.charAt(i))){
               key = key.slice(0,i+1) + key.charAt(i+1).toUpperCase() + key.slice(i+2)
            }

        }
        key = key.replace(/-|_/g,"")
        return key
    }

    private mapErrors(validationErrors: ValidationError[]) : ContactValidationError {
        let errors : ContactValidationError = {};     
        validationErrors.forEach((err) => {
            errors[err.property as keyof ContactDto] = err.constraints ? Object.values(err.constraints)[0] : undefined;
        })
        return errors
    }

    public async saveToDB(input: ContactDto) {
        const {error} = await supabaseAdmin.from<definitions['contacts']>("contacts").insert({
            name: input.name,
            contactNumber: input.contactNumber,
            message: input.message
        });
        if(error){
            console.log(error)
            throw new Error("Failed to Book")
        }
    }
}

export default Contact.getInstance()