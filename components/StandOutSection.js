import { useMedia } from "react-use";

const StandOutSection = () => {
  const isWide = useMedia("(min-width: 640px)", true);
  return (
    <div className="flex flex-col md:flex-row justify-center">
      <div className="w-full md:w-1/2">
        <img
          className="w-full h-full"
          src={`${
            isWide
              ? "/desktop/image-stand-out.jpg"
              : "/mobile/image-stand-out.jpg"
          }`}
          alt="transform"
        />
      </div>

      <div className="w-full md:w-1/2">
        <div className="mx-auto px-12 md:px-0 md:max-w-xs xl:max-w-md 2xl:max-w-2xl mt-16 xl:mt-36 mb-16 lg:mb-0 2xl:mt-48 flex flex-col items-center md:items-start">
          <h1 className="font-fraunces text-veryDarkDesBlue font-black mb-10 text-3xl xl:text-4xl 2xl:text-5xl max-w-xs md:max-w-md text-center md:text-left">
            Stand out to the right audience
          </h1>
          <p className="text-darkGrayBlue font-barlow xl:text-lg 2xl:text-2xl text-center md:text-left">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <a
            className="font-fraunces font-black relative text-veryDarkDesBlue z-10 w-max after:w-32 xl:after-w-36 xl:text-lg 2xl:text-xl block mt-10 after:content-[''] after:bg-softRed after:h-3 xl:after:w-36 2xl:after:w-40 after:absolute after:inset-0 after:top-3  xl:after:top-4 after:z-[-1] after:rounded after:translate-x-[-5px] lg:after:translate-x-[-4px] xl:after:translate-x-[-6px] after:opacity-50 hover:after:opacity-100"
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
