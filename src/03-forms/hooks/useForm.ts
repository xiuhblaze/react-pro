import { ChangeEvent, useState } from "react";

export const useForm = <T>(initialValues: T) => {

  const [formData, setFormData] = useState(initialValues);

  const isValidEmail = ( email: string ) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }

  const onChange = (event:ChangeEvent<HTMLInputElement>) => {
    
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const resetForm = () => {
    setFormData({ ...initialValues });
  }

  return {
    // Properties
    ...formData,
    formData,
    // Methods
    isValidEmail,
    onChange,
    resetForm,
  };
}

export default useForm;