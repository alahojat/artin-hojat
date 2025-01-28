import { ContactForm } from "../components/ContactForm";

export const ContactPage = () => {
  return (
    <>
      <div className="base-container flex-grow bg-steel">
        <section className="base grid grid-cols-1 place-items-start justify-items-center sm:gap-0 md:grid-cols-2 md:gap-4 lg:gap-12">
          <div className="max-w-prose">
            <h2 className="subheading subheading-light">Get in touch</h2>
            <p className="body body-light lg:col-span-1">
              I work with individuals from athletes to everyday patients,
              focusing on health, productivity, and longevity. Whether it’s
              optimizing high-level performance or maintaining overall
              well-being, my goal is to improve quality of life, work
              sustainability, and happiness.
            </p>
            <p className="body body-light">
              If you're looking to enhance your physical and mental health and
              elevate your performance, let's connect.
            </p>
          </div>
          <ContactForm />
        </section>
      </div>
    </>
  );
};
