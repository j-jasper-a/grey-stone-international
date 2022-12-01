import Process from "./Process";

const Processes = () => {
  return (
    <section className="flex w-full flex-col justify-between gap-4 md:max-w-md">
      <Process
        title="Planning"
        description="Hello, this is a description of some sort that is a description of my sort which is a description of your sort, so the description must be of everybody's sort at least according to my sorting system."
        watermark="Step 1"
      />
      <Process
        title="Production"
        description="Hello, this is a description of some sort that is a description of my sort which is a description of your sort, so the description must be of everybody's sort at least according to my sorting system."
        watermark="Step 2"
      />
      <Process
        title="Export"
        description="Hello, this is a description of some sort that is a description of my sort which is a description of your sort, so the description must be of everybody's sort at least according to my sorting system."
        watermark="Step 3"
      />
    </section>
  );
};

export default Processes;
