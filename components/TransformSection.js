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
          className="font-fraunces font-black xl:text-lg 2xl:text-xl block mt-10"
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
