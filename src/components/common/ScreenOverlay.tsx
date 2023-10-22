type Props = {
  isOpen: boolean;
  onClick: () => void;
};

const ScreenOverlay = ({ isOpen, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`h-screen bg-dark/50 ${isOpen ? "block" : "hidden"}`}
    />
  );
};

export default ScreenOverlay;
