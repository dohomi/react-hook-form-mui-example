import { DatePickerElement, FormContainer, SelectElement, TextFieldElement } from 'react-form-hook-mui'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { Layout } from '../components/Layout'

class LocalizedUtils extends DateFnsUtils {
  dateFormat = 'P'
}

export default function Home() {

  const [values, setValues] = useState({})

  return (
    <Layout>
      <MuiPickersUtilsProvider utils={LocalizedUtils}>
        <FormContainer defaultValues={{
          firstName: '',
          lastName: '',
          email: '',
          birthday: null,
          hero: ''
        }} onSuccess={(formData) => {
          setValues(formData)
        }}>
          <TextFieldElement name={'firstName'} required label={'First Name'} fullWidth margin={'dense'} />
          <TextFieldElement name={'lastName'} label={'Last Name'} fullWidth margin={'dense'} />
          <TextFieldElement name={'email'} required type={'email'} label={'Email'} fullWidth margin={'dense'} />
          <DatePickerElement name={'birthday'} openTo="year" required label={'Birthday'} fullWidth margin={'dense'} />
          <SelectElement name={'hero'} required label={'Favorite Hero'} options={[
            { id: 'superman', title: 'Superman' },
            { id: 'spiderman', title: 'Spiderman' },
            { id: 'flash', title: 'Flash' }
          ]} fullWidth margin={'dense'} />
          <Button type={'submit'} variant={'contained'}>Submit</Button>
        </FormContainer>
      </MuiPickersUtilsProvider>
      <em>
        {JSON.stringify(values)}
      </em>
    </Layout>
  )
}
