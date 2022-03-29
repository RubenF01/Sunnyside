import { useMedia } from "react-use";

const GraphicSection = () => {
  const isWide = useMedia("(min-width: 640px)", true);
  return (
    <div className="flex flex-col md:flex-row justify-center">
      <div className="w-full md:w-1/2 relative">
        <img
          className="w-full h-full"
          src={`${
            isWide
              ? "/desktop/image-graphic-design.jpg"
              : "/mobile/image-graphic-design.jpg"
          }`}
          alt="transform"
        />
        <div className="absolute inset-0 text-center top-96 md:top-44 lg:top-60 xl:top-96 2xl:top-[28rem]">
          <h1 className="font-fraunces text-darkSatCyan text-3xl xl:text-4xl 2xl:text-5xl mb-7 md:mb-4 lg:mb-10">
            Graphic Design
          </h1>
          <p className="font-barlow font-bold md:font-semibold text-darkSatCyan px-5 lg:px-10 xl:px-40 2xl:px-52 xl:text-lg 2xl:text-2xl md:max-w-sm lg:max-w-full">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential client's
            attention.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative">
        <img
          className="w-full h-full"
          src={`${
            isWide
              ? "/desktop/image-photography.jpg"
              : "/mobile/image-photography.jpg"
          }`}
          alt="transform"
        />
        <div className="absolute inset-0 text-center top-96 md:top-44 lg:top-60 xl:top-96 2xl:top-[28rem]">
          <h1 className="font-fraunces text-darkBlue text-3xl xl:text-4xl 2xl:text-5xl mb-7 md:mb-4 lg:mb-10">
            Photography
          </h1>
          <p className="font-barlow font-bold md:font-semibold text-darkBlue lg:px-10 xl:px-40 2xl:px-52 xl:text-lg 2xl:text-2xl mx-auto md:max-w-xs lg:max-w-full">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GraphicSection;
