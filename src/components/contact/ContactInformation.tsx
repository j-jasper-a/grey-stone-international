import Link from "next/link";
import Tag from "../common/Tag";
import { HiMap, HiPhone, HiMail } from "react-icons/hi";
import Image from "next/image";
import Map from "./Map";

const ContactInformation = () => {
  return (
    <div className="flex flex-col justify-between gap-4 sm:gap-8">
      <div className="flex flex-col gap-4 sm:gap-8">
        <Tag title="Contact Information" />
        <div className="flex flex-row gap-4">
          <HiPhone className="h-8 w-8 text-brand-1" />
          <div className="flex flex-col">
            <a href="tel:+8801822999092" className="hover:text-brand-1">
              +880-1822-999092
            </a>
            <a href="tel:+8801972999092" className="hover:text-brand-1">
              +880-1972-999092
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <HiMail className="h-8 w-8 text-brand-1" />
          <div className="flex flex-col">
            <a
              href="mailto:harun2@greystonebd.net"
              className="hover:text-brand-1"
            >
              harun2@greystonebd.net
            </a>
            <a
              href="mailto:harun.business@gmail.com"
              className="hover:text-brand-1"
            >
              harun.business@gmail.com
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <HiMap className="h-8 w-8 text-brand-1" />
          <p>
            Apartment E07 (7th floor),
            <br />
            Rupayan P & F Square,
            <br />
            Holding 62/5/E, Uttar Kalshi,
            <br />
            Mirpur, Dhaka-1216
            <br />
            Bangladesh
          </p>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default ContactInformation;
