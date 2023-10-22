import Link from "next/link";

type Props = {
  text: string;
  onClick?: () => void;
  href?: string;
  important?: boolean;
};

const Button = ({ text, onClick, href = "/", important }: Props) => {
  const ButtonText = ({ text }: Props) => {
    return (
      <p
        className={`min-w-max rounded-lg border-2 px-8 py-4 text-center font-bold backdrop-blur-sm ${
          important
            ? "border-brand-1 bg-brand-1 text-light hover:border-dark hover:bg-dark"
            : "border-dark/25 hover:bg-dark hover:text-light"
        }`}
      >
        {text}
      </p>
    );
  };

  if (onClick) {
    return (
      <button onClick={onClick} className="min-w-max">
        <ButtonText text={text} />
      </button>
    );
  } else {
    return (
      <Link href={href} className="min-w-max">
        <ButtonText text={text} />
      </Link>
    );
  }
};

export default Button;
