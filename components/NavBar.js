import Image from "next/image";
import Hamburger from "./Icons/Hamburger";
import { useMedia } from "react-use";

const NavBar = () => {
  const isWide = useMedia("(min-width: 640px)", true);
  return (
    <div className="flex items-center justify-between px-10 py-5 absolute w-full">
      <Image src="/logo.svg" alt="logo" width={125} height={25} />
      {isWide ? (
        <div className="flex gap-x-8 items-center">
          <a className="font-barlow text-white" href="#">
            About
          </a>
          <a className="font-barlow text-white" href="#">
            Services
          </a>
          <a className="font-barlow text-white" href="#">
            Projects
          </a>
          <button
            className="rounded-3xl bg-white font-fraunces px-5 py-3 hover:text-white hover:bg-[#6fcfff]"
            type="button"
          >
            CONTACT
          </button>
        </div>
      ) : (
        <Hamburger />
      )}
    </div>
  );
};

export default NavBar;
