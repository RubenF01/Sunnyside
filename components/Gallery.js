import GalleryImage from "./GalleryImage";

const Images = [
  {
    imgDesktop: "/desktop/image-gallery-milkbottles.jpg",
    imgMobile: "/mobile/image-gallery-milkbottles.jpg",
  },

  {
    imgDesktop: "/desktop/image-gallery-orange.jpg",
    imgMobile: "/mobile/image-gallery-orange.jpg",
  },

  {
    imgDesktop: "/desktop/image-gallery-cone.jpg",
    imgMobile: "/mobile/image-gallery-cone.jpg",
  },

  {
    imgDesktop: "/desktop/image-gallery-sugarcubes.jpg",
    imgMobile: "/mobile/image-gallery-sugar-cubes.jpg",
  },
];

const Gallery = () => {
  return (
    <div className="flex flex-wrap">
      {Images.map((image, index) => (
        <GalleryImage key={index} {...image} />
      ))}
    </div>
  );
};

export default Gallery;
