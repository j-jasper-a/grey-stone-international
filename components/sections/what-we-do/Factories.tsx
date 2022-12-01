import Image from "next/image";
import factoryImage from "../../../public/assets/images/what-we-do/factory.jpg";
import bsciLogo from "../../../public/assets/images/what-we-do/bsci-logo.svg";
import sedexLogo from "../../../public/assets/images/what-we-do/sedex-logo.png";

const Factories = () => {
  return (
    <section className="flex w-full flex-col justify-between gap-4 md:max-w-md">
      <Image
        className="aspect-square rounded-xl object-cover object-center"
        src={factoryImage}
        alt="Factory"
      />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas,
        quibusdam, perferendis distinctio suscipit dolore, repellat eveniet ipsa
        deserunt qui minus voluptate unde itaque assumenda soluta explicabo
        possimus sequi animi! Voluptate.
      </p>
      <div className="flex">
        <Image
          className="w-24 opacity-75 saturate-0"
          src={bsciLogo}
          alt="BSCI logo"
        />
        <Image
          className="w-24 opacity-75 saturate-0"
          src={sedexLogo}
          alt="SEDEX logo"
        />
      </div>
    </section>
  );
};

export default Factories;
