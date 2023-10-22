import FooterNavigationLink from "./FooterNavigationLink";

const FooterNavigation = () => {
  return (
    <nav className="w-fit justify-self-end">
      <ul className="flex flex-col">
        <FooterNavigationLink title="Home" href="#" />
        <FooterNavigationLink title="Services" href="#services" />
        <FooterNavigationLink title="Our Story" href="#our-story" />
        <FooterNavigationLink title="Careers" href="#careers" />
        <FooterNavigationLink title="Contact Us" href="#contact" />
      </ul>
    </nav>
  );
};

export default FooterNavigation;
