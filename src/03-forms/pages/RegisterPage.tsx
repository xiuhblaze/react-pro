import { FormEvent } from 'react';
import useForm from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {
  const {
    name,
    email,
    password1,
    password2,
    formData,
    isValidEmail,
    onChange,
    resetForm,
  } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <h1>Register page</h1>
      <form onSubmit={ onSubmit } noValidate>
        <input 
          name="name"
          type="text"
          placeholder="Name"
          value={ name }
          onChange={ onChange }
          className="has-error"
        />
        <span>Es necesario el nombre</span>
        <input name="email" type="email" placeholder="EMail" value={ email } onChange={ onChange } />
        <input name="password1" type="password" placeholder="Password" value={ password1 } onChange={ onChange } />
        <input name="password2" type="password" placeholder="Repeat password" value={ password2 } onChange={ onChange } />

        <button type="submit">Create</button>
        <button type="button" onClick={ resetForm }>Reset</button>
      </form>
    </div>
  )
}
