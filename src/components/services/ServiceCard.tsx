import HeadingTertiary from "../common/HeadingTertiary";
import Tag from "../common/Tag";
import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const ServiceCard = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
}: Props) => {
  return (
    <div className="relative mb-56 flex flex-col items-center">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1080}
        height={1080}
        title={title}
        className="rounded-lg object-cover shadow-sm shadow-dark/25"
      />
      <div className="absolute -bottom-56 flex aspect-auto w-[90%] flex-col gap-4 rounded-lg bg-light p-4 shadow-sm shadow-dark/25 sm:aspect-[10/9] sm:p-8">
        <Tag title={title} />
        <HeadingTertiary text={subtitle} />
        <p className="opacity-75">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
