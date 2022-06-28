import { Form } from '@remix-run/react'
import FormComponent from '~/components/containers/form'
import { lessRoundedBasicInput, lessRoundedBasicLargeButton } from '~/utils/styles'

const NewAddress = () => {

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  }

  return (
    <FormComponent method='post' action='/dashboard/profile/newAddress' buttons={[
      {
        id: 1,
        type: "submit",
        content: "Add",
        disabled: false,
        style: lessRoundedBasicLargeButton
      }
    ]}
    inputs={[{
        type: "text",
        label: "Address",
        name: "address",
        placeholder: "Enter your address here",
        error: undefined,
        handleChange: handleAddressChange,
        style: lessRoundedBasicInput
    }]} />
  )
}

export default NewAddress