import { FaPaperPlane } from "react-icons/fa";

const Question = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-4 md:max-w-md md:items-start">
      <FaPaperPlane className="text-8xl" />
      <p className="text-center text-4xl font-bold md:text-left">
        Do you need to get in touch with us?
      </p>
    </div>
  );
};

export default Question;
