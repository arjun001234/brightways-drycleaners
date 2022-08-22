
export type allowedValues = string | number | boolean | Date


export type validationOptions = {
    maxLength?: number,
    minLength?: number,
    max?: number,
    min?: number
    isEmail?: boolean,
    isContactNumber?: boolean,
    minDate?: Date,
    maxDate?: Date,
    required?: boolean
}

export type validationProps<T> = {
    name: keyof T,
    validationOptions: validationOptions
}

export class Validation<T> {

    private input: T
    private options: validationProps<T>[]

    constructor(input: T,options: validationProps<T>[]) {
       this.input = input
       this.options = options
    }

    validate() {
        this.options.forEach((obj) => {
            const value = this.input[obj.name]
            if(value){
               for(const prop in obj.validationOptions){
                  const propValue = obj.validationOptions[(prop as keyof validationOptions)]
                  console.log(prop,propValue)
               }
            }
        })
    }
}