const TransformSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 xl:pl-40 xl:pt-36 2xl:pt-48">
        <h1 className="font-fraunces text-veryDarkDesBlue font-black mb-10 xl:text-4xl 2xl:text-5xl xl:pr-40 2xl:pr-64">
          Transform your brand
        </h1>
        <p className="text-darkGrayBlue font-barlow xl:text-lg 2xl:text-2xl xl:pr-28 2xl:pr-48">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <a
          className="font-fraunces font-black relative z-10 xl:text-lg 2xl:text-xl block mt-10 after:content-[''] after:bg-yellow after:h-3 after:w-40 after:absolute after:inset-0 after:top-4 after:z-[-1] after:rounded after:translate-x-[-6px] after:opacity-50 hover:after:opacity-100"
          href="#"
        >
          LEARN MORE
        </a>
      </div>
      <div className="w-1/2">
        <img
          className="w-full h-full"
          src="/desktop/image-transform.jpg"
          alt="transform"
        />
      </div>
    </div>
  );
};

export default TransformSection;
