import Link from "next/link";

type Props = {
  title: string;
  href: string;
};

const FooterNavigationLink = ({ title, href }: Props) => {
  return (
    <li>
      <Link href={href}>
        <p className="hover:text-light">{title}</p>
      </Link>
    </li>
  );
};

export default FooterNavigationLink;
