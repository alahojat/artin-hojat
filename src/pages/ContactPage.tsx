import { ContactForm } from "../components/ContactForm";

export const ContactPage = () => {
  return (
    <>
      <section className="col lg:row base items-center bg-steel sm:gap-12 lg:gap-60">
        <p className="subheading-alt subheading-alt-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ContactForm></ContactForm>
      </section>
    </>
  );
};
