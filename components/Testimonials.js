import Client from "./Client";

const Clients = [
  {
    profilePic: "/image-emily.jpg",
    testimonial:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    position: "Marketing Director",
  },

  {
    profilePic: "/image-thomas.jpg",
    testimonial:
      "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    position: "Chief Operating Officer",
  },

  {
    profilePic: "/image-jennie.jpg",
    testimonial:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: "Jennie F.",
    position: "Business Owner",
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 md:py-28">
      <h1 className="font-fraunces text-grayishBlue text-center tracking-widest text-xl md:text-2xl mb-14">
        CLIENT TESTIMONIALS
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start space-y-10 lg:space-x-8 lg:space-y-0">
        {Clients.map((client, index) => (
          <Client key={index} {...client} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
