import Link from "next/link";

type Props = {
  title: string;
  href: string;
  onClick?: () => void;
};

const MobileNavigationLink = ({ title, href, onClick }: Props) => {
  return (
    <li className="w-fit">
      <Link onClick={onClick} href={href} title={title}>
        <p className="text-lg font-bold">{title}</p>
      </Link>
    </li>
  );
};

export default MobileNavigationLink;
