type Props = {
  title: string;
  description: string;
  watermark: string;
};

const Process = (props: Props) => {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <p className="text-6xl font-bold uppercase opacity-20">
          {props.watermark}
        </p>
        <div className="h-2 w-12 rounded bg-gradient-to-br from-blue-400 to-green-400 bg-clip-border" />
        <h3 className="text-xl font-bold">{props.title}</h3>
      </div>
      <p className="">{props.description}</p>
    </section>
  );
};

export default Process;
