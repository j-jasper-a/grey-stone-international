import Section from "../common/Section";
import HeadingSecondary from "../common/HeadingSecondary";
import SectionTitle from "../common/SectionTitle";
import Openings from "./Openings";
import WhyUs from "./WhyUs";

const Careers = () => {
  return (
    <Section id="careers" title="Careers">
      <SectionTitle title="Careers" />
      <HeadingSecondary>
        Perhaps, you are here looking for a job.
      </HeadingSecondary>
      <div className="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2">
        <WhyUs />
        <Openings />
      </div>
    </Section>
  );
};

export default Careers;
