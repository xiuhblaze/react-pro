import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckboxInput } from '../components/MyCheckboxInput';
import { MySelectInput } from '../components/MySelectInput';
import { MyTextInput } from '../components/MyTextInput';

import '../styles/styles.css';

export const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik Abstract</h1>
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
              <MyTextInput label="First name" name="firstName" />
              <MyTextInput label="Last name" name="lastName" />
              <MyTextInput label="Email address" name="email" type="email" />
              <MySelectInput label="Job type" name="jobType">
                <option value="">(pick something)</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="junior">IT Junior</option>
                <option value="senior">IT Senior</option>
              </MySelectInput>
              <MyCheckboxInput label="Accept the terms and conditions" name="terms" />
              <button type="submit">Save</button>
            </Form>
          )}
      </Formik>
    </div>
  )
}
