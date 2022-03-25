import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-5 absolute w-full">
      <Image src="/logo.svg" alt="logo" width={125} height={25} />
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
          className="rounded-3xl bg-white font-fraunces px-5 py-3"
          type="button"
        >
          CONTACT
        </button>
      </div>
    </div>
  );
};

export default NavBar;
