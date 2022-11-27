import Section from "../../layouts/Section";
import SectionBackground from "../../layouts/SectionBackground";
import SectionContent from "../../layouts/SectionContent";
import Process from "./Process";
import planningImage from "../../../public/assets/images/what-we-do/planning.png";
import productionImage from "../../../public/assets/images/what-we-do/production.png";
import exportImage from "../../../public/assets/images/what-we-do/export.png";
import factoryImage from "../../../public/assets/images/what-we-do/factory.jpg";
import Image from "next/image";

const WhatWeDoSection = () => {
  return (
    <Section>
      <SectionBackground isImage={false} imageUrl="" imageAlt="" className="" />
      <SectionContent className="flex flex-col gap-8">
        <Process
          title="Planning"
          description="Hello, this is a description of some sort that is a description of my sort which is a description of your sort, so the description must be of everybody's sort at least according to my sorting system."
          image={planningImage}
          imageAlt="Planning"
        />
        <Process
          title="Production"
          description="Hello, this is a description of some sort that is a description of my sort which is a description of your sort, so the description must be of everybody's sort at least according to my sorting system."
          image={productionImage}
          imageAlt="Production"
        />
        <Process
          title="Export"
          description="Hello, this is a description of some sort that is a description of my sort which is a description of your sort, so the description must be of everybody's sort at least according to my sorting system."
          image={exportImage}
          imageAlt="Export"
        />
        <div className="grid grid-rows-2 gap-4">
          <Image
            className="aspect-square object-cover object-center"
            src={factoryImage}
            alt="Factory"
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas,
            quibusdam, perferendis distinctio suscipit dolore, repellat eveniet
            ipsa deserunt qui minus voluptate unde itaque assumenda soluta
            explicabo possimus sequi animi! Voluptate.
          </p>
        </div>
      </SectionContent>
    </Section>
  );
};

export default WhatWeDoSection;
