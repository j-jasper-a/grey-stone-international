import Image, { StaticImageData } from "next/image";
import { TbBusinessplan } from "react-icons/tb";

type Props = {
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
};

const Process = (props: Props) => {
  return (
    <section className="flex flex-col items-center gap-4">
      <Image src={props.image} alt={props.imageAlt} />
      <h3 className="text-xl font-bold">{props.title}</h3>
      <p className="">{props.description}</p>
    </section>
  );
};

export default Process;
