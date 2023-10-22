import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

const MobileMenuButton = ({ isOpen, onClick }: Props) => {
  return isOpen ? (
    <AiOutlineClose onClick={onClick} className="h-8 w-8" />
  ) : (
    <AiOutlineMenu onClick={onClick} className="h-8 w-8" />
  );
};

export default MobileMenuButton;
