import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Layout } from '../components/Layout'

class LocalizedUtils extends DateFnsUtils {
  dateFormat = 'P'
}

type FormData = {
  firstName: string;
  lastName: string;
};

export default function Example() {

  const { register, setValue, handleSubmit } = useForm<FormData>()
  const onSubmit = handleSubmit(({ firstName, lastName }) => {
    console.log(firstName, lastName)
  }) // firstName and lastName will have correct type

  return (

    <Layout>

      <MuiPickersUtilsProvider utils={LocalizedUtils}>

        <form onSubmit={onSubmit}>
          <label>First Name</label>
          <input name="firstName" ref={register} />
          <label>Last Name</label>
          <input name="lastName" ref={register} />
          <button
            type="button"
            onClick={() => {
              setValue('lastName', 'luo')
            }}
          >
            SetValue
          </button>
        </form>
      </MuiPickersUtilsProvider>
    </Layout>

  )
}
