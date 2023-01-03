import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {

  const {
    errors, touched,
    handleSubmit,
    getFieldProps,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup
        .string()
        .max(15, 'Debe de tener máximo 15 caracteres')
        .required('Requerido'),
      lastName: Yup
        .string()
        .max(15, 'Debe de tener máximo 15 caracteres')
        .required('Requerido'),
      email: Yup
        .string()
        .email('No es una dirección de correo electrónico valida')
        .required('Requerido'),
    })
  });

  return (
    <div>
      <h1>Formik Yup</h1>
      <form onSubmit={ handleSubmit } noValidate>
        <label htmlFor="firstName">First name</label>        
        <input type="text" { ...getFieldProps('firstName') } />
        { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

        <label htmlFor="lastName">Last name</label>
        <input type="text" { ...getFieldProps('lastName') } />
        { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }

        <label htmlFor="email">Email address</label>
        <input type="email" { ...getFieldProps('email') } />
        { touched.email && errors.email && <span>{ errors.email }</span> }

        <button type="submit">Send</button>
      </form>
    </div>
  )
}
