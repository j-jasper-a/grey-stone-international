import Image from "next/image";
import Section from "../common/Section";
import CallToAction from "./CallToAction";
import HeadingPrimary from "../common/HeadingPrimary";
import Tag from "../common/Tag";

const Hero = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-0% to-100%">
      <Image
        src={"/assets/images/backdrop.webp"}
        alt="Hero"
        width={1920}
        height={1920}
        priority={true}
        className="absolute top-0 -z-10 h-full w-full object-cover object-bottom"
      />
      <Section className="h-full">
        <div className="flex h-full flex-col items-center justify-center gap-4 sm:gap-8 lg:w-1/2">
          <Tag title="Grey Stone International" />
          <HeadingPrimary text={"You will love working with us."} />
          <CallToAction />
        </div>
      </Section>
    </div>
  );
};

export default Hero;
