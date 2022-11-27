import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
};

const Container = (props: Props) => {
  return (
    <div className={`container mx-auto max-w-screen-xl p-4 ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Container;
