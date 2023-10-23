import SectionTitle from "../common/SectionTitle";
import ServiceCard from "./ServiceCard";
import Section from "../common/Section";
import HeadingSecondary from "../common/HeadingSecondary";

const Services = () => {
  return (
    <Section id="services">
      <SectionTitle title="Services" />
      <HeadingSecondary>
        We are with you at every step of the way.
      </HeadingSecondary>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        <ServiceCard
          title="Market Research"
          subtitle="We study design trends from all over the world"
          description="From streets to exhibitions, magazines to the web, we carefully observe the evolving trends in fashion design. We guide you with our findings and help you stay ahead of the curve."
          imageSrc={"/assets/images/services/market-research.webp"}
          imageAlt={"A photo of clothes folder on a chair"}
        />
        <ServiceCard
          title="Sourcing"
          subtitle="We procure reliable sources for raw material"
          description="We have a large network of proven suppliers from all over the world. Our primary goal is to integrate quality and cost-effectiveness with equal importance in our assessment and evaluation."
          imageSrc={"/assets/images/services/sourcing.webp"}
          imageAlt={"A photo of buttons"}
        />
        <ServiceCard
          title="Sample Development"
          subtitle="We manufacture all desired samples ourselves"
          description="We have a dedicated team of experts who are able to manufacture samples efficiently and quickly. We handle any sample you require at any stage of production with utmost care and urgency."
          imageSrc={"/assets/images/services/sample-development.webp"}
          imageAlt={
            "A photo of a table with a sewing machine and patterns on the wall"
          }
        />
        <ServiceCard
          title="Production Oversight"
          subtitle="We look after the entire production process"
          description="From the moment production begins, we proactively monitor every step in the process. We stay vigilant, keep focused, act fast, and keep you routinely informed with our progress."
          imageSrc={"/assets/images/services/production-oversight.webp"}
          imageAlt={
            "A photo of a man cutting a piece of cloth with a pair of scissors"
          }
        />
        <ServiceCard
          title="Quality Assurance"
          subtitle="We ensure only the highest quality standards"
          description="We have a dedicated team of experts who are experienced in global quality standards and protocols. We have in-house inspectors but also work with third-party inspectors when required."
          imageSrc={"/assets/images/services/quality-assurance.webp"}
          imageAlt={"A photo of a man placing a garment on a line"}
        />
        <ServiceCard
          title="Logistics"
          subtitle="We follow through all logistical procedures"
          description="We carefully handle all logistical operations. Until your goods reach your warehouse, we stay fully involved at every step of the process. We also stay vigilant for any post-delivery necessity."
          imageSrc={"/assets/images/services/logistics.webp"}
          imageAlt={"A photo of a cargo ship"}
        />
      </div>
    </Section>
  );
};

export default Services;
