type Props = {
  text: string;
};

const HeadingPrimary = ({ text }: Props) => {
  return (
    <h1 className="w-fit text-center font-special text-6xl font-bold sm:text-7xl">
      {text}
    </h1>
  );
};

export default HeadingPrimary;
