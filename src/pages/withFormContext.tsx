import * as React from 'react'
import { Layout } from '../components/Layout'
import { FormContainer, SelectElement, TextFieldElement } from 'react-form-hook-mui'
import Button from '@material-ui/core/Button'
import { useForm } from 'react-hook-form'

type AnyData = {
  firstName: string;
  lastName: string;
};

export default function WithFormContext() {
  const formContext = useForm<AnyData>({
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  })
  const { handleSubmit } = formContext
  const onSubmit = handleSubmit((formData) => {
    console.log(formData)
  })
  return (
    <Layout>
      <FormContainer
        handleSubmit={onSubmit}
        formContext={formContext}
      >
        <TextFieldElement name={'firstName'} required label={'First Name'} fullWidth margin={'dense'} />
        <TextFieldElement name={'lastName'} label={'Last Name'} fullWidth margin={'dense'} />
        <TextFieldElement name={'email'} required type={'email'} label={'Email'} fullWidth margin={'dense'} />
        <SelectElement name={'hero'} required label={'Favorite Hero'} options={[
          { id: 'superman', title: 'Superman' },
          { id: 'spiderman', title: 'Spiderman' },
          { id: 'flash', title: 'Flash' }
        ]} fullWidth margin={'dense'} />
        <Button type={'submit'} variant={'contained'}>Submit</Button>
      </FormContainer>
    </Layout>
  )
}
