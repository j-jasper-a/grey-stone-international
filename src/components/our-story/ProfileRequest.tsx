import Link from "next/link";
import Button from "../common/Button";

const ProfileRequest = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="w-fit text-dark">
        If you want to learn more about us, you may{" "}
        <Link
          href={"#contact"}
          className="font-bold text-dark hover:text-brand-1"
        >
          request a company profile
        </Link>
        .
      </p>
    </div>
  );
};

export default ProfileRequest;
