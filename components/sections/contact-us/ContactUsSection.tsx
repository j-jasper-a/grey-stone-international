import Container from "../../layouts/Container";
import Section from "../../layouts/Section";
import SectionTitle from "../../layouts/SectionTitle";
import ContactInfo from "./ContactInfo";
import Question from "./Question";

const ContactUsSection = () => {
  return (
    <Section className="bg-cyan-700 text-neutral-100">
      <Container>
        <SectionTitle title="Contact Us" isInverted={true} />
        <div className="mb-8 flex flex-col justify-between gap-4 md:mb-16 md:flex-row">
          <Question />
          <ContactInfo />
        </div>
      </Container>
    </Section>
  );
};

export default ContactUsSection;
