import Link from "next/link";

type Props = {
  children?: React.ReactNode;
  href?: string;
  title?: string;
};

const NavigationLink = ({ children, href = "/", title }: Props) => {
  return (
    <li>
      <Link href={href} title={title}>
        <p className="min-w-max border-b-2 border-transparent text-lg font-bold hover:border-brand-1">
          {children}
        </p>
      </Link>
    </li>
  );
};

export default NavigationLink;
