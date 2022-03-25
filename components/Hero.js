import NavBar from "./NavBar";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative">
      <NavBar />
      <img
        className="h-screen w-full"
        src="/desktop/image-header.jpg"
        alt="hero"
      />
      <div className="absolute flex flex-col items-center inset-0 top-60">
        <h1 className="text-center font-fraunces text-white text-7xl pb-32">
          WE ARE CREATIVES
        </h1>
        <Image
          src="/icon-arrow-down.svg"
          alt="arrow down"
          width={30}
          height={115}
        />
      </div>
    </div>
  );
};

export default Hero;
