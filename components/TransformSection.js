const TransformSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-1/2">
        <div className="mx-auto lg:max-w-xs xl:max-w-3xl 2xl:max-w-2xl lg:mt-16 2xl:mt-48">
          <h1 className="font-fraunces text-veryDarkDesBlue font-black mb-10 lg:text-3xl xl:text-4xl 2xl:text-5xl 2xl:max-w-md">
            Transform your brand
          </h1>
          <p className="text-darkGrayBlue font-barlow xl:text-lg 2xl:text-2xl">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a
            className="font-fraunces font-black relative w-max z-10 xl:text-lg 2xl:text-xl block mt-10 after:content-[''] after:bg-yellow after:h-3 lg:after:w-32 xl:after:w-36 2xl:after:w-40 after:absolute after:inset-0 lg:after:top-3 xl:after:top-4 after:z-[-1] after:rounded lg:after:translate-x-[-4px] xl:after:translate-x-[-6px] after:opacity-50 hover:after:opacity-100"
            href="#"
          >
            LEARN MORE
          </a>
        </div>
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
