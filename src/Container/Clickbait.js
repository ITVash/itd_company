import React from 'react'
import { withFormik } from 'formik'

import { Clickbait as ClickbaitBase } from '../Component'

import validateForm from '../utils/validate'
const maping = new Map([
  ["list1", new Map([])],
  ["list2", new Map([])],
  ["list3", new Map([])],
  ["list4", new Map([])],
  ["forms", new Map([])],
])
const Clickbait = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    map: maping,
    name: '',
    phone: '',
    email: '',
    text: ''
  }),
  validate: values => {
    const value = values.map.get("forms")
    let errors = {}
    //validateForm({ values, errors })
    if (!value.get("name")) {
      errors.name = "Имя обязательно для заполнения!"
    }
    if (!value.get("phone")) {
      errors.phone = "Телефон обязателен для заполнения!"
    }
    if (!value.get("email")) {
      errors.email = "Email обязателен для заполнения!"
    }
    if (!value.get("text")) {
      errors.text = "Сообщение не может быть пустым!"
    }
    console.log('errors', errors)
    return errors
  },
  handleChange: e => {
    console.log(e.target.name)
    maping.get("forms").set(e.target.name, e.target.value)
  },
  handleSubmit: (values, { setSubmitting }) => {
    console.log('values', values)
    setSubmitting(false)
  },

  displayName: 'Clickbait'
})(ClickbaitBase)

export default Clickbait
