import { Link } from "react-router-dom";
import logo from "../assets/logo.webp"

const OurMotive = () => {
  return (
    <div className="hero bg-winter w-11/12 lg:container mx-auto rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={logo}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="lg:text-left text-center">
          <h1 className="text-5xl font-bold">Our Motive</h1>
          <p className="py-6 font-medium">
            At Discount PRO, our goal is to simplify savings for shoppers in
            Bangladesh by consolidating discount coupons and deals from various
            e-commerce platforms. We aim to make finding and using coupons
            seamless, helping users save money effortlessly. Through our
            platform, we strive to enhance the online shopping experience for
            everyone.
          </p>
          <Link to={"/brands"} className="px-4 py-2 text-white bg-[#2C8BBF] rounded-md hover:bg-[#2c8cbfbe] focus:outline-none focus:bg-[#2c8cbfbe]">Explore</Link>
        </div>
      </div>
    </div>
  );
};

export default OurMotive;
