type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return (
    <div className="relative flex w-fit flex-col">
      <p className={`font-bold uppercase tracking-widest text-brand-1`}>
        {title}
      </p>
    </div>
  );
};

export default SectionTitle;
