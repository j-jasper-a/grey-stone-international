import Image from "next/image";
import Tag from "../common/Tag";
import Container from "../common/Container";

const TrustedBy = () => {
  return (
    <div>
      <Container>
        <Tag title="Trusted By" />
      </Container>
      <div className="mx-auto flex flex-row justify-center">
        <Image
          src={"/assets/images/logos/encuentro-logo.svg"}
          width={256}
          height={256}
          alt="Logo"
          className="h-6 w-fit"
        />
        <Image
          src={"/assets/images/logos/jysk-logo.svg"}
          width={256}
          height={256}
          alt="Logo"
          className="h-6 w-fit"
        />
        <Image
          src={"/assets/images/logos/marc-o-polo-logo.svg"}
          width={256}
          height={256}
          alt="Logo"
          className="h-6 w-fit"
        />
      </div>
    </div>
  );
};

export default TrustedBy;
