import Tag from "../common/Tag";
import { BsCheck } from "react-icons/bs";
import ReasonCard from "./ReasonCard";

const WhyUs = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-8">
      <Tag title="Why Us" />
      <div className="grid grid-cols-2 gap-4">
        <ReasonCard
          title="Global Impact"
          body="Expand your skills and advance your career in our dynamic environment."
          Icon={BsCheck}
        />
        <ReasonCard
          title="Dynamic Supply Chain"
          body="Join a supportive team that values diversity and encourages innovation."
          Icon={BsCheck}
        />
        <ReasonCard
          title="Manufacturing Excellence"
          body="Contribute to ethical practices and sustainable fashion in a meaningful
        way."
          Icon={BsCheck}
        />
        <ReasonCard
          title="Business Growth"
          body="Contribute to ethical practices and sustainable fashion in a meaningful
        way."
          Icon={BsCheck}
        />
      </div>
    </div>
  );
};

export default WhyUs;
