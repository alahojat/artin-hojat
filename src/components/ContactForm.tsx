import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

type FormValues = {
  user_name: string;
  user_email: string;
  message: string;
};

export const ContactForm = () => {
  const [messageStatus, setMessageStatus] = useState("");
  const [errorStatus, setErrorStatus] = useState("");

  const initialValues: FormValues = {
    user_name: "",
    user_email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    user_name: Yup.string()
      .required("Oops! We need your name to proceed.")
      .min(2, "Name must be at least 2 characters."),
    user_email: Yup.string()
      .required("Don’t forget to share your email with us!")
      .email("Hmm, that doesn’t look like a email address!"),
    message: Yup.string()
      .required("We would love to hear from you!")
      .min(10, "Your message is too short.."),
  });

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>,
  ): Promise<void> => {
    setSubmitting(true);
    try {
      await emailjs.send(
        "contact_service",
        "contact_form",
        values,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setMessageStatus("Thank you for your email!");
      setErrorStatus("");
      resetForm();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrorStatus("Failed to send email. Please try again.");
      setMessageStatus("");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, resetForm }) => (
        <Form>
          <fieldset className="col">
            <legend className="sr-only">Get in touch</legend>

            <label className="label" htmlFor="user_name">
              Name
            </label>
            <div className="h-16">
              <Field
                id="user_name"
                name="user_name"
                placeholder="Your Name"
                className="input"
              />
              <ErrorMessage
                name="user_name"
                component="p"
                className="error-text"
              />
            </div>

            <label className="label" htmlFor="user_email">
              Email
            </label>
            <div className="col h-16">
              <Field
                id="user_email"
                name="user_email"
                type="email"
                placeholder="Your Email"
                className="input"
              />
              <ErrorMessage
                name="user_email"
                component="p"
                className="error-text"
              />
            </div>

            <label className="label" htmlFor="message">
              Message
            </label>
            <div className="h-52">
              <Field
                as="textarea"
                id="message"
                name="message"
                placeholder="Type your message"
                className="textarea"
              />
              <ErrorMessage
                name="message"
                component="p"
                className="error-text text-wrap"
              />
            </div>

            <div className="row items-center justify-center">
              <button
                className="button button-secondary"
                type="button"
                onClick={() => resetForm()}
              >
                Clear
              </button>
              <button className="button" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </div>
          </fieldset>
          <div className="body body-light">
            {messageStatus && <p className="success">{messageStatus}</p>}
            {errorStatus && <p className="error-text">{errorStatus}</p>}
          </div>
        </Form>
      )}
    </Formik>
  );
};
