const StandOutSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-1/2">
        <img
          className="w-full h-full"
          src="/desktop/image-stand-out.jpg"
          alt="transform"
        />
      </div>
      <div className="w-1/2 xl:pl-40 xl:pt-36 2xl:pt-48">
        <div className="mx-auto lg:max-w-sm xl:max-w-full lg:mt-16">
          <h1 className="font-fraunces text-veryDarkDesBlue font-black mb-10 lg:text-3xl xl:text-4xl 2xl:text-5xl xl:pr-10 2xl:pr-64">
            Stand out to the right audience
          </h1>
          <p className="text-darkGrayBlue font-barlow xl:text-lg 2xl:text-2xl xl:pr-28 2xl:pr-48">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <a
            className="font-fraunces font-black relative z-10 w-max lg:after:w-32 xl:after-w-36 xl:text-lg 2xl:text-xl block mt-10 after:content-[''] after:bg-softRed after:h-3 xl:after:w-36 2xl:after:w-40 after:absolute after:inset-0 after:top-4 after:z-[-1] after:rounded lg:after:translate-x-[-4px] xl:after:translate-x-[-6px] after:opacity-50 hover:after:opacity-100"
            href="#"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default StandOutSection;
