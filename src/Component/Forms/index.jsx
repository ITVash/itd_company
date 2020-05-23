import React from 'react'
import classNames from 'classnames'
import { ErrorMessage } from 'formik'

const Forms = props => {
  const { values, touched, errors, handleSubmit, isSubmitting, handleBlur, handleChange } = props
  return (
		<>
			<form onSubmit={handleSubmit}>
				<div className={classNames("index_input_container")}>
					<input
						type='text'
						onBlur={handleBlur}
						onChange={handleChange}
						value={values.name}
						name='name'
						className={classNames("index_contacts_input", {
							error_input: errors.name && touched.name,
						})}
						placeholder='Имя'
						required
					/>
					<input
						type='tel'
						onBlur={handleBlur}
						onChange={handleChange}
						value={values.phone}
						name='phone'
						className={classNames("index_contacts_input", {
							error_input: errors.phone && touched.phone,
						})}
						placeholder='Телефон (WhatsApp/Viber)'
						required
					/>
					<input
						type='email'
						onBlur={handleBlur}
						onChange={handleChange}
						value={values.email}
						name='email'
						className={classNames("index_contacts_input", {
							error_input: errors.email && touched.email,
						})}
						placeholder='Email'
						required
					/>
				</div>
				<textarea
					name='text'
					onBlur={handleBlur}
					onChange={handleChange}
					value={values.text}
					id=''
					cols='30'
					rows='10'
					placeholder='Ваше сообщение'
					className={classNames({ error_input: errors.name && touched.name })}
					required
				></textarea>
				<div className='error_form_msg'>
					{errors.name && touched.name && errors.name}
					{errors.phone && touched.phone && errors.phone}
					{errors.email && touched.email && errors.email}
					{errors.text && touched.text && errors.text}
				</div>
				<button type='submit' disabled={isSubmitting}>Отправить</button>
			</form>
		</>
	)
}

export default Forms
