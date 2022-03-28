import NavBar from "./NavBar";
import Image from "next/image";
import { useMedia } from "react-use";

const Hero = () => {
  const isWide = useMedia("(min-width: 640px)", true);
  return (
    <div className="relative">
      <NavBar />
      <img
        className="md:h-[70vh] xl:h-screen w-full"
        src={`${
          isWide ? "/desktop/image-header.jpg" : "/mobile/image-header.jpg"
        }`}
        alt="hero"
      />
      <div className="absolute flex flex-col items-center inset-0 top-40 lg:top-44 xl:top-60">
        <h1 className="text-center font-fraunces text-white text-5xl max-w-xs lg:max-w-full lg:text-5xl xl:text-7xl pb-8 lg:pb-10 xl:pb-32">
          WE ARE CREATIVES
        </h1>
        <Image
          src="/icon-arrow-down.svg"
          alt="arrow down"
          width={`${isWide ? 30 : 40}`}
          height={`${isWide ? 115 : 110}`}
        />
      </div>
    </div>
  );
};

export default Hero;
