import { Form } from '@remix-run/react'
import React from 'react'
import Input, { inputProps } from '../ui/input'

type FormComponentProps = {
    method: "post" | "get"
    action: string
    inputs: inputProps[]
    buttons: {
        id: number
        content: string
        type: "button" | "reset" | "submit"
        style: string
        disabled?: boolean
        handleClick?: () => void
    }[]
}


const FormComponent : React.FC<FormComponentProps> = ({method,action,inputs,buttons}) => {
  return (
    <Form method={method} action={action}>
        {inputs.map((i) => {
              return <Input key={i.name} {...i} />
        })}
        {buttons.map(({disabled = false,...b}) => {
            if(b.handleClick){
                return <button key={b.id} type="button" className={b.style} disabled={disabled} onClick={b.handleClick}>{b.content}</button>
            }
            return <button key={b.id} type={b.type} className={b.style} disabled={disabled}>{b.content}</button>
        })}
    </Form>
  )
}

export default FormComponent