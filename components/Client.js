const Client = ({ profilePic, testimonial, name, position }) => {
  return (
    <div className="flex flex-col items-center max-w-sm">
      <img className="rounded-full h-16" src={profilePic} alt="Emily R." />
      <p className="text-center font-barlow text-veryDarkGrayBlue text-lg my-14">
        {testimonial}
      </p>
      <h1 className="font-fraunces text-veryDarkDesBlue font-black mb-2 text-lg">
        {name}
      </h1>
      <p className="font-barlow text-grayishBlue">{position}</p>
    </div>
  );
};

export default Client;
