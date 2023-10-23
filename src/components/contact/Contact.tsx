import Section from "../common/Section";
import HeadingSecondary from "../common/HeadingSecondary";
import ContactInformation from "./ContactInformation";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="bg-dark text-light">
      <Section id="contact" title="Contact">
        <HeadingSecondary>Get in touch with us.</HeadingSecondary>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          <ContactInformation />
          <Form />
        </div>
      </Section>
    </div>
  );
};

export default Contact;
