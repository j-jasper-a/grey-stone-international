type Props = {
  title: string;
  isInverted: boolean;
};

const SectionTitle = (props: Props) => {
  return (
    <div className="flex flex-col items-center py-8 md:py-16">
      <h2
        className={`${
          props.isInverted ? "text-neutral-100" : "text-neutral-700"
        } text-2xl font-bold uppercase`}
      >
        {props.title}
      </h2>
      <div
        className={`${
          props.isInverted ? "bg-neutral-100" : "bg-neutral-700"
        }  h-2 w-24 rounded bg-clip-border`}
      />
    </div>
  );
};

export default SectionTitle;
