
import { Form, Formik } from 'formik';
import { MySelectInput } from '../components/MySelectInput';
import { MyTextInput } from '../components/MyTextInput';
import formJson from '../data/custom-form.json';
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const item of formJson) {
  initialValues[item.name] = item.value;

  if (!item.validations) continue;

  let schema = Yup.string();
  for (const rule of item.validations) {
    if (rule.type === 'required') {
      schema = schema.required((rule as any).message || 'Campo requerido');
    }
    if (rule.type === 'min') {
      schema = schema.min((rule as any).value || 2, (rule as any).message || `Minimo de ${ (rule as any).value || 2 } caracteres`)
    }
    if (rule.type === 'email') {
      schema = schema.email((rule as any).message || 'No es un correo');
    }
  }
  requiredFields[item.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik 
        initialValues={ initialValues }
        validationSchema={ validationSchema }
        onSubmit={ (values) => { console.log(values); } }
      >
        { ({ handleReset }) => (
          <Form noValidate>
            {
              formJson.map( ({ type, name, label, placeholder, options }) => {
                if (type === 'text' || type === 'password' || type === 'email') {
                  return <MyTextInput 
                    key={ name }
                    label={ label }
                    name={ name }
                    type={ type as any }
                    placeholder={ placeholder }
                  />
                } else if (type === 'select') {
                  return <MySelectInput 
                    key={ name }
                    name={ name }
                    label={ label }
                  >
                    <option value="">(select an option)</option>
                    {
                      options?.map( ({ id, label }) => (
                        <option key={ id } value={ id }>{ label }</option>
                      ))
                    }
                  </MySelectInput>
                }

                throw new Error(`El type: ${ type }, no es soportado`);
              })
            }
            <button type="submit">Submit</button>
            <button type="button" onClick={ handleReset }>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
