import Image from "next/image";
import ownerImage from "../../../public/assets/images/our-story/owner.jpg";
import { FaQuoteLeft } from "react-icons/fa";

const Message = () => {
  return (
    <section className="flex w-full flex-col justify-between overflow-hidden rounded-xl bg-white shadow md:max-w-md">
      <Image
        className="aspect-square object-cover object-center"
        src={ownerImage}
        alt="Owner"
      />
      <div className="flex flex-col justify-between gap-4 p-4">
        <div>
          <FaQuoteLeft className="float-left pr-4 text-7xl opacity-20" />
          <p>
            After spending over 20 years with Digital Business Limited, I feel
            very privileged to be writing this message as the chief executive
            officer. This is a special time in our company’s history as we
            celebrate our 19th anniversary. We began our journey September 1,
            2001, and have spent the past decade continuing to build our brand,
            which has now become synonymous with our commitment to helping our
            clients share knowledge and create innovation.
          </p>
        </div>
        <div>
          <p className="font-bold">Md. Harun ar Rashid</p>
          <p className="text-sm">CEO & Proprietor</p>
        </div>
      </div>
    </section>
  );
};

export default Message;
