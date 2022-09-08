import { IsDefined, IsEmail, IsMobilePhone, Length, registerDecorator, validate, ValidationArguments, ValidationError, ValidationOptions, Validator, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import logger from '~/logging/logger';
import { definitions } from '~/supabase';
import { supabaseAdmin } from '~/supabase/supabase.server';

@ValidatorConstraint()
export class IsValidFormValueConstraint implements ValidatorConstraintInterface {
    validate(value: string | undefined | null, validationArguments?: ValidationArguments | undefined): boolean | Promise<boolean> {
        if (!value) {
            return false;
        }
        return true;
    }
}

@ValidatorConstraint()
export class IsValidContactNumberConstraint implements ValidatorConstraintInterface {
    validate(value: string | undefined | null, validationArguments?: ValidationArguments | undefined): boolean | Promise<boolean> {
        if (!value || !/^\d{10}$/g.test(value)) {
            return false;
        }
        return true;
    }
}

@ValidatorConstraint()
export class IsValidPickUpDateConstraint implements ValidatorConstraintInterface {
    validate(pickUpDate: string, args: ValidationArguments) {
        const selectedDate = new Date(pickUpDate);
        const now = new Date();
        if (selectedDate.getDay() === now.getDay() || selectedDate < now) {
            return false
        }
        return true
    }
}

export function IsValidPickUpDate(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsValidPickUpDateConstraint
        });
    };
}

export function IsValidFormValue(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsValidFormValueConstraint
        })
    }
}

export function IsValidContactNumber(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsValidContactNumberConstraint
        })
    }
}

export class BookingDto {
    @Length(3, 20)
    @IsDefined()
    @IsValidFormValue({ message: "Name Required" })
    name: string = "";

    @IsEmail()
    @IsDefined()
    @IsValidFormValue({ message: "Email Required" })
    email: string = "";

    @IsDefined()
    @IsValidFormValue({ message: "Contact Number Required" })
    @IsValidContactNumber({message: "Invalid contact number"})
    contactNumber: string = "";

    @Length(10)
    @IsDefined()
    @IsValidFormValue({ message: "Address Required" })
    address: string = "";

    @IsDefined()
    @IsValidPickUpDate()
    @IsValidFormValue({ message: "Pickup Date Required" })
    pickUpDate: string = "";

    @IsDefined()
    @IsValidFormValue({ message: "Time Slot Required" })
    timeSlot: string = "";

    @IsDefined()
    @IsValidFormValue({ message: "Token Required" })
    gRecaptchaResponse: string = ""
}

export type BookingValidationError = Partial<typeof BookingDto["prototype"]>

class Booking {
    private static instance: Booking
    static getInstance(): Booking {
        if (this.instance) {
            return this.instance
        }
        this.instance = new Booking()
        return this.instance
    }
    public async ValidateInput(input: FormData): Promise<[BookingValidationError | null, BookingDto | null]> {
        const data = new BookingDto()
        for (const pair of input.entries()) {
            const key = this.keyToCamelCase(pair[0]) as keyof BookingDto
            if (key in data) {
                data[key] = pair[1] as any;
            }
        }
        let validationErrors: ValidationError[] = await validate(data)
        if (validationErrors.length !== 0) {
            const errors = this.mapErrors(validationErrors)
            return [errors, null]
        }
        return [null, data]
    }
    private keyToCamelCase(key: string): string {
        for (var i = 0; i < key.length; i++) {
            if (/-|_/.test(key.charAt(i))) {
                key = key.slice(0, i + 1) + key.charAt(i + 1).toUpperCase() + key.slice(i + 2)
            }

        }
        key = key.replace(/-|_/g, "")
        return key
    }

    // private keyToSnakeCase(key: string): string {
    //     for (var i = 0; i < key.length; i++) {
    //         if (/[A-Z]/.test(key.charAt(i))) {
    //             key = key.slice(0, i) + "_"  + key.charAt(i).toLowerCase() + key.slice(i + 1)
    //         }
    //     }
    //     return key
    // }

    private mapErrors(validationErrors: ValidationError[]): BookingValidationError {
        let errors: BookingValidationError = {};
        validationErrors.forEach((err) => {
            errors[err.property as keyof BookingDto] = err.constraints ? Object.values(err.constraints)[0] : undefined;
        })
        return errors
    }

    public async saveToDB(input: BookingDto) {
        try {
            
            const {error,data} = await supabaseAdmin.from<definitions['bookings']>("bookings").insert({
                name: input.name,
                email: input.email,
                address: input.address,
                contact_number: input.contactNumber,
                pick_up_date: input.pickUpDate,
                time_slot: input.timeSlot as definitions["bookings"]["time_slot"]
            });
            if(error){
                logger.error(error,"Booking insertion into database error")
                throw new Error("Failed to Book")
            }
        } catch (error) {
            logger.error(error,"Booking insertion into database error")
            throw new Error("Failed to Book")
        }
    }
}

export default Booking.getInstance()