import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={ (values) => {
          console.log(values);
        }}
        validationSchema={
          Yup.object({
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
            terms: Yup
              .boolean()
              .oneOf([true], 'Es necesario aceptar los terminos y condiciones'),
            jobType: Yup
              .string()
              .required('Requerido')
              .notOneOf(['junior'], 'Esta opción no está permitida.')
          })
        }
      >
        {(formik) => (
            <Form>
              <label htmlFor="firstName">First name</label> 
              <Field name="firstName" type="text" />
              <ErrorMessage name="firstName" component="span" />

              <label htmlFor="lastName">Last name</label>
              <Field name="lastName" type="text" />
              <ErrorMessage name="lastName" component="span" />

              <label htmlFor="email">Email address</label>
              <Field name="email" type="text" />
              <ErrorMessage name="email" component="span" />

              <label htmlFor="jobType">Job Type</label>
              <Field name="jobType" as="select">
                <option value="">(pick something)</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="junior">IT Junior</option>
                <option value="senior">IT Senior</option>
              </Field>
              <ErrorMessage name="jobType" component="span" />

              <label>
                <Field name="terms" type="checkbox" />
                Accept the terms and conditions
              </label>
              <ErrorMessage name="terms" component="span" />

              <button type="submit">Send</button>
            </Form>
          )}
      </Formik>
    </div>
  )
}
