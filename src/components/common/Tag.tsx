type Props = {
  title: string;
};

const Tag = ({ title }: Props) => {
  return (
    <p
      className={`w-fit text-sm font-bold uppercase tracking-widest opacity-75`}
    >
      {title}
    </p>
  );
};

export default Tag;
