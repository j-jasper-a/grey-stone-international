type Props = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
};

const Section = ({ children, className, id, title }: Props) => {
  return (
    <section
      id={id}
      title={title}
      className={`mx-auto flex max-w-screen-xl flex-col ${className} gap-4 px-4 py-20 sm:gap-8`}
    >
      {children}
    </section>
  );
};

export default Section;
