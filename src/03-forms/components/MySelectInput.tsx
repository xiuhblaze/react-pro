import { ErrorMessage, useField } from 'formik'

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const MySelectInput = ({ label, ...props }: Props) => {
  const [ field ] = useField(props);

  return (
    <>
      <label htmlFor={ props.id || props.name }>{ label }</label> 
      <select { ...field } { ... props } />
      <ErrorMessage name={ props.name } component="span" />
    </>
  )
}
