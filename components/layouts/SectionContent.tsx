import { ReactNode } from "react";
import Container from "./Container";

type Props = {
  className?: string;
  children?: ReactNode;
};

const SectionContent = (props: Props) => {
  return <Container className={props.className}>{props.children}</Container>;
};

export default SectionContent;
