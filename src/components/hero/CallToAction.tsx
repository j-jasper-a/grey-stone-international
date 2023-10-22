import Button from "../common/Button";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center gap-4 text-center sm:gap-8">
      <p className="w-[85%] text-xl opacity-75 sm:w-[75%]">
        We are a 100% export-oriented buying house based in Bangladesh. We offer
        a wide range of services for your ready-made garments needs.
      </p>
      <div className="flex flex-col items-center justify-center gap-2 lg:flex-row">
        <Button text="Get Started" href="/#contact" important />
        <Button text="Learn More" href="/#services" />
      </div>
    </div>
  );
};

export default CallToAction;
