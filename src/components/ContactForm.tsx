import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

type FormValues = {
  user_name: string;
  user_email: string;
  message: string;
};

export const ContactForm = () => {
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
      .email("Hmm, that doesn’t look like a valid email address..."),
    message: Yup.string()
      .required("We would love to hear from you! Please type your message.")
      .min(10, "Your message is a bit short. Tell us a little more!"),
  });

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting, resetForm, setStatus }: FormikHelpers<FormValues>,
  ): Promise<void> => {
    setSubmitting(true);
    try {
      await emailjs.send(
        "contact_service",
        "contact_form",
        values,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus({ success: "Thank you for your email!" });
      resetForm();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({ error: "Failed to send email. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, resetForm, status }) => (
          <Form className="contact-form">
            <fieldset>
              <legend className="subheader subheader-light">Contact Us</legend>

              <label className="label" htmlFor="user_name">
                Name
              </label>
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

              <label className="label" htmlFor="user_email">
                Email
              </label>
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

              <label className="label" htmlFor="message">
                Message
              </label>
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
                className="error-text"
              />

              <div className="flex flex-row">
                <button
                  className="button button-secondary"
                  type="button"
                  onClick={() => resetForm()}
                >
                  Clear
                </button>
                <button
                  className="button"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
            </fieldset>

            {status && status.success && (
              <p className="success">{status.success}</p>
            )}
            {status && status.error && <p className="error">{status.error}</p>}
          </Form>
        )}
      </Formik>
    </>
  );
};
