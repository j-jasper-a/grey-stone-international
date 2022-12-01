import Section from "../../layouts/Section";
import SectionBackground from "../../layouts/SectionBackground";
import SectionContent from "../../layouts/SectionContent";
import SectionTitle from "../../layouts/SectionTitle";
import Factories from "./Factories";
import Processes from "./Processes";

const WhatWeDoSection = () => {
  return (
    <Section>
      <SectionContent>
        <SectionTitle title="What We Do" isInverted={false} />
        <div className="mb-8 flex flex-col justify-between gap-4 md:mb-16 md:flex-row">
          <Processes />
          <Factories />
        </div>
      </SectionContent>
    </Section>
  );
};

export default WhatWeDoSection;
