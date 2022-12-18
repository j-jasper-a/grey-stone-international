import { FaPaperPlane } from "react-icons/fa";

const Question = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-4 md:max-w-md md:items-start">
      <p className="text-center text-4xl font-bold md:text-left">
        Do you need to get in touch with us?
      </p>
      <FaPaperPlane className="text-8xl" />
    </div>
  );
};

export default Question;
