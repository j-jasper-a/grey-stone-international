import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
};

const Section = (props: Props) => {
  return (
    <section className={`relative ${props.className}`}>
      {props.children}
    </section>
  );
};

export default Section;
