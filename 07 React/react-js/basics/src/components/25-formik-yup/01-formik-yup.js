import React from 'react';
import { Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormikYup1 = () => {
  const initialValues = {
    firstName: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(5, '5 karakterden az olamaz')
      .required('Doldurulmasi zorunlu alan'),
    metin: Yup.string().matches(/Merhaba/i),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Container>
      <h2>Formik & Yup</h2>
      <form>
        <label htmlFor="firstName">Adiniz</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Lutfen adinizi giriniz"
        />
      </form>
    </Container>
  );
};

export default FormikYup1;
