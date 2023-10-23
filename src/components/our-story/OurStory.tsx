import Section from "../common/Section";
import HeadingSecondary from "../common/HeadingSecondary";
import SectionTitle from "../common/SectionTitle";
import History from "./History";
import Message from "./Message";
import ProfileRequest from "./ProfileRequest";
import EstablishmentYear from "./EstablishmentYear";

const OurStory = () => {
  return (
    <Section id="our-story">
      <SectionTitle title="Our Story" />
      <HeadingSecondary>
        We have been doing this for a long time.
      </HeadingSecondary>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        <History />
        <EstablishmentYear />
        <Message />
      </div>
      <ProfileRequest />
    </Section>
  );
};

export default OurStory;
