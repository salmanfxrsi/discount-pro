import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const ShopCard = ({ shop }) => {
  const { _id, brand_logo, brand_name, rating, description, isSaleOn } = shop;

  return (
    <div className="border p-4 rounded-lg shadow-md flex items-center bg-winter">
      {/* Brand Logo */}
      <img
        src={brand_logo}
        alt={`${brand_name} logo`}
        className="w-16 h-16 mr-4"
      />

      {/* Middle Section */}
      <div className="flex-1">
        <div className="flex lg:items-center flex-col lg:flex-row">
          <span className="text-xl font-black mr-2 text-white">{brand_name}</span>
          <div className="flex items-center gap-1 text-yellow-400 font-black">
            <ReactStars value={rating}></ReactStars>
            <span className="ml-1">{rating}</span>
          </div>
        </div>
        <p className="text-white mt-1 font-bold">{description}</p>
      </div>

      {/* Right Section */}
      <div className="text-center">
        <Link to={`/brand/${_id}`} className="bg-[#2C8BBF]  text-white px-4 py-2 rounded hover:bg-[#2c8cbfbe]">
          View Coupons
        </Link>
        {isSaleOn && (
          <div className="mt-2 text-white font-bold animate-bounce">
            Sale is on!
          </div>
        )}
      </div>
    </div>
  );
};

ShopCard.propTypes = {
  shop: PropTypes.object,
}

export default ShopCard;
