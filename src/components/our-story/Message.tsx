import Tag from "../common/Tag";
import { MdFormatQuote } from "react-icons/md";
import MessageAuthor from "./MessageAuthor";

const Message = () => {
  return (
    <div className="flex flex-col gap-4 rounded-lg border-2 border-dark/25 p-4 hover:border-dark sm:gap-8 sm:p-8">
      <Tag title="Message" />
      <div className="flex h-full flex-col justify-between gap-4 sm:gap-8">
        <div>
          <MdFormatQuote className="float-left mr-4 h-16 w-16" />
          <p>
            Even before I founded Grey Stone International, I was deeply
            passionate about garments, especially yarns and fabrics. I have
            managed to build a successful career by focusing on exactly two
            things; ethical practices and attention to detail. I guided many
            now-veterans in the industry to achieve excellence in their work
            with the same values.
            <br />
            <br />
            Grey Stone International has allowed me to transform my personal
            values of ethical practices and attention to detail into a
            company-wide philosophy. These values are ingrained in every service
            we offer. We hope you will appreciate what we offer. We are looking
            forward to working with you.
          </p>
        </div>
        <MessageAuthor />
      </div>
    </div>
  );
};

export default Message;
