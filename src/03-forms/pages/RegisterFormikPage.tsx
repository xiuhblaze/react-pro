import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components/MyTextInput';

import '../styles/styles.css';

export const RegisterFormikPage = () => {
 
  const initialValues = {
    nameInput: '',
    emailInput: '',
    passwordInput: '',
    passwordConfirmInput: '',
  }

  const validations = Yup.object({
    nameInput: Yup
      .string()
      .min(2, 'El nombre debe de ser entre 2 y 15 caracteres')
      .max(15, 'El nombre debe de ser entre 2 y 15 caracteres')
      .required('El nombre es requerido'),
    emailInput: Yup
      .string()
      .email('No es una dirección de correo valida')
      .required('Es necesaria una dirección de correo electrónico'),
    passwordInput: Yup
      .string()
      .min(6, 'La contraseña debe de tener al menos 6 caracteres')
      .required('La contraseña no puede ser vacia'),
      passwordConfirmInput: Yup
      .string()
      .required('Reescribe la contraseña')
      .oneOf([Yup.ref('passwordInput'), null], 'La contraseña no coincide')
  });

  const onSubmit = (values: any) => {
    
    console.log(values);
  }

  return (
    <div>
      <h1>Register formik page</h1>

      <Formik
        initialValues={ initialValues }
        onSubmit={ onSubmit }
        // onReset={ () => { console.log('Reset') }}
        validationSchema={ validations }
      >
        { ({ handleReset }) => (
          <Form>
            <MyTextInput label="Name" name="nameInput" type="text" />
            <MyTextInput label="Email" name="emailInput" type="email" />
            <MyTextInput label="Password" name="passwordInput" type="password" />
            <MyTextInput label="Confirm password" name="passwordConfirmInput" type="password" />
            <button type="submit">Create</button>
            <button type="button" onClick={ handleReset }>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
