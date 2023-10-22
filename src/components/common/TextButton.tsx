import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const TextButton = () => {
  return (
    <Link href={"#contact"}>
      <div className="flex w-max flex-row items-center">
        <p className="font-bold">Learn More</p>
        <BsArrowRight className="h-8 w-8" />
      </div>
    </Link>
  );
};

export default TextButton;
