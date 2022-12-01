import historyImage from "../../../public/assets/images/our-story/pantone.jpg";
import Image from "next/image";

const History = () => {
  return (
    <section className="flex w-full flex-col justify-between gap-4 md:max-w-md">
      <p className="text-3xl font-bold">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        repellendus.
      </p>
      <Image
        className="aspect-square rounded-xl object-cover object-center"
        src={historyImage}
        alt="Pantone"
      />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, non,
        odio laboriosam obcaecati at aliquid eveniet cumque aspernatur voluptas
        aliquam iste nihil veritatis vero a architecto voluptates nisi explicabo
        quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        assumenda eveniet minus fuga inventore, maxime animi iusto, nulla quasi
        aut reiciendis, omnis esse explicabo quas.
      </p>
    </section>
  );
};

export default History;
