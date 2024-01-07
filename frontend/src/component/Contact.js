import React from 'react'
import { SectionHeading,ContactMeButton,ContactMeSection,ContactMeTextarea,ContactMeInput,InputSection } from '../styles';
import { useFormik } from 'formik';
import * as yup from 'yup';

function Contact() {
    const validationSchema = yup.object({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Invalid email address').required('Email is required'),
        message: yup.string().required('Message is required'),
      }); 

      const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          // Handle the form submission logic here
          console.log(values);
        },
      });


  return (
    <ContactMeSection>
    <SectionHeading>Contact Me</SectionHeading>
    <InputSection>
      <ContactMeInput
        type="text"
        placeholder="Your Name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div style={{ color: 'red' }}>{formik.errors.name}</div>
      ) : null}

      <ContactMeInput
        type="email"
        placeholder="Your Email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div style={{ color: 'red' }}>{formik.errors.email}</div>
      ) : null}

      <ContactMeTextarea
        placeholder="Your Message"
        name="message"
        onChange={formik.handleChange}
        value={formik.values.message}
      ></ContactMeTextarea>
      {formik.touched.message && formik.errors.message ? (
        <div style={{ color: 'red' }}>{formik.errors.message}</div>
      ) : null}

      <ContactMeButton type="submit" onClick={formik.handleSubmit}>
        Submit
      </ContactMeButton>
    </InputSection>
  </ContactMeSection>
  )
}

export default Contact