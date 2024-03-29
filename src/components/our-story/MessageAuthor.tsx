import Image from "next/image";

const MessageAuthor = () => {
  return (
    <div className="flex flex-row items-center gap-4">
      <Image
        src={"/assets/images/our-story/managing-director.webp"}
        alt="A photo of Md. Harun ar Rashid"
        width={512}
        height={512}
        title="Md. Harun Ar Rashid"
        className="w-16 rounded-full border-2 border-dark/25 bg-dark/5"
      />
      <div className="flex flex-col text-sm">
        <p className="font-bold">Md. Harun Ar Rashid</p>
        <p>
          Managing Director <br /> Grey Stone International
        </p>
      </div>
    </div>
  );
};

export default MessageAuthor;
