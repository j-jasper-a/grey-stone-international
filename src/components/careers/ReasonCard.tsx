import { IconType } from "react-icons";

type Props = {
  title: string;
  body: string;
  Icon: IconType;
};

const ReasonCard = ({ title, body, Icon }: Props) => {
  return (
    <div className="flex flex-row items-start gap-2">
      <Icon className="h-8 w-8 text-brand-1" />
      <div className="flex flex-col gap-2">
        <p className="font-bold">{title}</p>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default ReasonCard;
