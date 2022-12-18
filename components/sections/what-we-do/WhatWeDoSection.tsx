import Container from "../../layouts/Container";
import Section from "../../layouts/Section";
import SectionTitle from "../../layouts/SectionTitle";
import Factories from "./Factories";
import Processes from "./Processes";

const WhatWeDoSection = () => {
  return (
    <Section>
      <Container>
        <SectionTitle title="What We Do" isInverted={false} />
        <div className="mb-8 flex flex-col justify-between gap-4 md:mb-16 md:flex-row">
          <Processes />
          <Factories />
        </div>
      </Container>
    </Section>
  );
};

export default WhatWeDoSection;
