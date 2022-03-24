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
      <div className="absolute inset-0">
        <h1 className="text-center font-fraunces text-white text-7xl">
          WE ARE CREATIVES
        </h1>
      </div>
    </div>
  );
};

export default Hero;
