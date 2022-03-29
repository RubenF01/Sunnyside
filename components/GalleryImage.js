import { useMedia } from "react-use";

const GalleryImage = ({ imgDesktop, imgMobile }) => {
  const isWide = useMedia("(min-width: 640px)", true);
  return (
    <div className="basis-6/12 lg:basis-1/4">
      <img
        className="w-full h-full"
        src={`${isWide ? imgDesktop : imgMobile}`}
        alt="transform"
      />
    </div>
  );
};

export default GalleryImage;
