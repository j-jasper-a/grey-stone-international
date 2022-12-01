import Section from "../../layouts/Section";
import SectionContent from "../../layouts/SectionContent";
import SectionTitle from "../../layouts/SectionTitle";
import ContactInfo from "./ContactInfo";
import Question from "./Question";

const ContactUsSection = () => {
  return (
    <Section className="bg-green-800">
      <SectionContent className="text-neutral-100">
        <SectionTitle title="Contact Us" isInverted={true} />
        <div className="mb-8 flex flex-col items-center justify-between gap-16 md:mb-16 md:flex-row">
          <Question />
          <ContactInfo />
        </div>
      </SectionContent>
    </Section>
  );
};

export default ContactUsSection;
