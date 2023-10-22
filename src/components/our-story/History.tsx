import Tag from "../common/Tag";

const History = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col gap-4 rounded-lg border-2 border-dark/25 p-4 hover:border-dark sm:gap-8 sm:p-8">
      <Tag title="History" />
      <p>
        Grey Stone International was founded by Md. Harun Ar Rashid in 1996. By
        then, he had already developed an impressive portfolio working for
        multiple leading garment factories of Bangladesh. He began his career in
        the industry by joining the legendary Desh Garments Ltd in 1981.
        <br />
        <br />
        The early days of Grey Stone International were spent working on orders
        from Italian clients. By the 2000s, the company had grown and focused
        more on its business in Spain. The 2010s were spent with a more diverse
        portfolio from clients in Europe, especially France, Germany, Denmark,
        and the United Kingdom.
        <br />
        <br />
        In the {currentYear - 1996} years since its inception, Grey Stone
        International managed to excel in its services provided to many clients
        from all over the world. Today, it is a trusted name in the industry
        with a legacy built on ethical practices and diligence.
      </p>
    </div>
  );
};

export default History;
