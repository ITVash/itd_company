import React from 'react'
import { withFormik } from 'formik'
import Sender from '../utils/SendForm'

import { Forms } from '../Component'

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    name: '',
    phone: '',
    email: '',
    text: ''
  }),
  validate: values => {
    let errors = {}
    if (!values.name) {
      errors.name = 'Заполните имя!'
    }
    if (!values.phone) {
      errors.phone = 'Заполните телефон!'
    }
    if (!values.email) {
      errors.email = 'Заполните почту!'
    }
    if (!values.text) {
      errors.text = 'Заполните сообщение!'
    }
    return errors
  },
  handleSubmit: (values, { setSubmitting, resetForm }) => {
    console.log('values', values)
    Sender(values).catch(err => console.log('err', err))
    resetForm()
    setSubmitting(false)
  },
  displayName: 'Forms'
})(Forms)