type Props = {
  text: string;
};

const HeadingTertiary = ({ text }: Props) => {
  return (
    <h3 className="font-special text-3xl font-bold leading-[1.05]">{text}</h3>
  );
};

export default HeadingTertiary;
