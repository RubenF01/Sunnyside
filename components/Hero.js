import NavBar from "./NavBar";
import Image from "next/image";
import { useMedia } from "react-use";
import { motion } from "framer-motion";

const arrowTransition = {
  y: {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

const Hero = ({ isMenuToggled }) => {
  const isWide = useMedia("(min-width: 640px)", true);
  return (
    <div className="relative">
      <NavBar isMenuToggled={isMenuToggled} />
      <img
        className="w-full"
        src={`${
          isWide ? "/desktop/image-header.jpg" : "/mobile/image-header.jpg"
        }`}
        alt="hero"
      />
      <div className="absolute flex flex-col items-center inset-0 top-40 md:top-32 lg:top-44 xl:top-60">
        <h1 className="text-center font-fraunces text-white max-w-xs md:max-w-full text-4xl md:text-3xl lg:text-5xl xl:text-7xl pb-12 md:pb-6 lg:pb-10 xl:pb-20 2xl:pb-48 tracking-widest">
          WE ARE CREATIVES
        </h1>
        <motion.div
          transition={arrowTransition}
          animate={{
            y: ["15%", "-15%"],
          }}
        >
          <Image
            src="/icon-arrow-down.svg"
            alt="arrow down"
            width={`${isWide ? 25 : 40}`}
            height={`${isWide ? 100 : 110}`}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
