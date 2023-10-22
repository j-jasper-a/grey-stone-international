type Props = {
  children?: React.ReactNode;
  className?: string;
};

const HeadingSecondary = ({ children, className }: Props) => {
  return (
    <h2
      className={`font-bold md:w-1/2 ${className} font-special text-5xl leading-none tracking-tight`}
    >
      {children}
    </h2>
  );
};

export default HeadingSecondary;
