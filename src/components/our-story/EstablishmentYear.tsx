const EstablishmentYear = () => {
  return (
    <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-lg bg-dark/60 p-4 sm:order-first sm:col-span-2 sm:aspect-auto sm:p-8 lg:col-span-1">
      <video
        autoPlay
        muted
        loop
        src="/assets/videos/our-story/establishment-year-backdrop.mp4"
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover sepia-[25%]"
      >
        Not supported.
      </video>
      <p className={`font-special text-5xl font-bold text-light`}>
        Est. <br /> 1996
      </p>
    </div>
  );
};

export default EstablishmentYear;
