const Menu = ({ menu }) => {
  return (
    <div
      className={`w-[90%] flex flex-col absolute z-50 inset-0 left-4 top-6 ${
        menu ? "hidden" : ""
      }`}
    >
      <div className="w-6 overflow-hidden inline-block self-end">
        <div className=" h-16  bg-white rotate-45 transform origin-bottom-left"></div>
      </div>
      <div className="flex flex-col items-center font-barlow space-y-8 py-10 bg-white">
        <a className="text-lg text-veryDarkGrayBlue" href="#">
          About
        </a>
        <a className="text-lg text-veryDarkGrayBlue" href="#">
          Services
        </a>
        <a className="text-lg text-veryDarkGrayBlue" href="#">
          Projects
        </a>
        <button
          className="rounded-full font-fraunces bg-yellow px-4 py-2"
          type="button"
        >
          CONTACT
        </button>
      </div>
    </div>
  );
};

export default Menu;
