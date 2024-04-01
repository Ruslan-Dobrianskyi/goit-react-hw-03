import { Formik, Form, Field } from "formik";
import s from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
  id: nanoid(),
};

const ContactForm = ({ user, onAddContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    console.log(contact);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          className={s.input}
          type="text"
          name="name"
          placeholder="Name"
          id={nameFieldId}
        />
        <ErrorMessage name="name" as="span" />

        <label htmlFor={numberFieldId}>Number</label>
        <Field
          className={s.input}
          type="text"
          name="number"
          placeholder="Number"
          id={numberFieldId}
        />
        <ErrorMessage name="number" as="span" />

        <button
          onClick={() => onAddContact(user.id)}
          className={s.button}
          type="submit"
        >
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
