import Image from "next/image";

type Props = {
  isImage: boolean;
  imageUrl: string;
  imageAlt: string;
  className: string;
};

const SectionBackground = (props: Props) => {
  return props.isImage ? (
    <Image
      className={`absolute -z-10 h-full w-full object-cover object-center ${props.className}`}
      src={props.imageUrl}
      alt={props.imageAlt}
    />
  ) : (
    <div className={`absolute -z-10 h-full w-full ${props.className}`} />
  );
};

export default SectionBackground;
