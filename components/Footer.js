import Logo from "./Icons/LogoSVG";
import IconFacebook from "./Icons/IconFacebook";
import IconInstagram from "./Icons/IconInstagram";
import IconTwitter from "./Icons/IconTwitter";
import IconPinterest from "./Icons/IconPinterest";

const Footer = () => {
  return (
    <div className="bg-darkLightCyan flex flex-col items-center py-20">
      <Logo className="fill-darkModCyan mb-10 scale-150" />
      <div className="space-x-14 font-barlow font-medium text-darkModCyan mb-16">
        <a className="hover:text-white" href="#">
          About
        </a>
        <a className="hover:text-white" href="#">
          Services
        </a>
        <a className="hover:text-white" href="#">
          Projects
        </a>
      </div>
      <div className="flex space-x-6">
        <IconFacebook className="fill-darkModCyan hover:fill-white cursor-pointer" />
        <IconInstagram className="fill-darkModCyan hover:fill-white cursor-pointer" />
        <IconTwitter className="fill-darkModCyan hover:fill-white cursor-pointer" />
        <IconPinterest className="fill-darkModCyan hover:fill-white cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
