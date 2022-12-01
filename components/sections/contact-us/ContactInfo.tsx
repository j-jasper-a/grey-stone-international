import Link from "next/link";
import {
  RiWhatsappFill,
  RiPhoneFill,
  RiWechatFill,
  RiMailFill,
  RiMapPinFill,
  RiMapPin2Fill,
} from "react-icons/ri";

const ContactInfo = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-8 md:max-w-md md:items-start">
      <div className="flex flex-col items-center gap-2 md:items-start">
        <div className="flex items-center gap-2">
          <RiMapPin2Fill className="text-3xl" />
          <p className="text-xl font-bold">Head Office</p>
        </div>
        <p className="text-center md:text-left">
          Apartment C07, Rupayan P & F Square,
          <br />
          Holding 62/5/E, Uttar Kalshi, Mirpur,
          <br />
          Dhaka-1216, Bangladesh
        </p>
      </div>
      <Link href={"#"}>
        <button className="flex items-center gap-2 rounded-xl border-4 border-neutral-100 px-4 py-2">
          <span className="font-bold">Find On Google Maps</span>
          <RiMapPinFill className="text-3xl" />
        </button>
      </Link>
      <div className="flex flex-col">
        <div className="flex items-center gap-6">
          <RiMailFill className="text-3xl" />
          <p>j.jasper.a@gmail.com</p>
        </div>
        <div className="flex items-center gap-6">
          <RiPhoneFill className="text-3xl" />
          <p>+880-1730-445-747</p>
        </div>
        <div className="flex items-center gap-6">
          <RiWhatsappFill className="text-3xl" />
          <p>+880-1730-445-747</p>
        </div>
        <div className="flex items-center gap-6">
          <RiWechatFill className="text-3xl" />
          <p>j_jasper_a</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
