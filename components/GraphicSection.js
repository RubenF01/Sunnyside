const GraphicSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 relative">
        <img
          className="w-full h-full"
          src="/desktop/image-graphic-design.jpg"
          alt="transform"
        />
        <div className="absolute inset-0 text-center xl:top-96 2xl:top-[28rem]">
          <h1 className="font-fraunces text-darkSatCyan xl:text-4xl 2xl:text-5xl mb-10">
            Graphic Design
          </h1>
          <p className="font-barlow text-darkSatCyan xl:px-40 2xl:px-52 xl:text-lg 2xl:text-2xl">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential client's
            attention.
          </p>
        </div>
      </div>
      <div className="w-1/2 relative">
        <img
          className="w-full h-full"
          src="/desktop/image-photography.jpg"
          alt="transform"
        />
        <div className="absolute inset-0 text-center xl:top-96 2xl:top-[28rem]">
          <h1 className="font-fraunces text-darkBlue xl:text-4xl 2xl:text-5xl mb-10">
            Photography
          </h1>
          <p className="font-barlow text-darkBlue xl:px-40 2xl:px-52 xl:text-lg 2xl:text-2xl">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GraphicSection;
