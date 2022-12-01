import Section from "../../layouts/Section";
import SectionContent from "../../layouts/SectionContent";
import SectionTitle from "../../layouts/SectionTitle";
import History from "./History";
import Message from "./Message";

const OurStorySection = () => {
  return (
    <Section className="bg-neutral-100">
      <SectionContent>
        <SectionTitle title="Our Story" isInverted={false} />
        <div className="mb-8 flex flex-col justify-between gap-4 md:mb-16 md:flex-row">
          <History />
          <Message />
        </div>
      </SectionContent>
    </Section>
  );
};

export default OurStorySection;
