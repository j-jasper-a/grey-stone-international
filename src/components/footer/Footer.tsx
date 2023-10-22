import Container from "../common/Container";
import Logo from "../common/Logo";
import FooterNavigation from "./FooterNavigation";

const Footer = () => {
  return (
    <footer className="border-t-[1px] border-light/10 bg-dark p-4 text-sm text-light text-light/50 sm:p-8">
      <Container className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-3 sm:gap-8">
        <div>
          <p className="font-bold">Grey Stone International</p>
          <p className="">Copyright © 2023. All rights reserved.</p>
          <p>Developed by Jihan Jasper Al-rashid</p>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Logo className="h-16 w-16 opacity-50 brightness-0 invert hover:opacity-100" />
        </div>
        <FooterNavigation />
      </Container>
    </footer>
  );
};

export default Footer;
