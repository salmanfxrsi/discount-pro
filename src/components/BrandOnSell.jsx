import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import 'aos/dist/aos.css';

const BrandOnSellCard = ({ brand }) => {
  const { _id, brand_logo, brand_name, coupons, category } = brand;



  return (
    <div className="rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 bg-winter">
      <div className="flex justify-center">
        <img
          src={brand_logo}
          alt={brand_name}
          className="w-24 h-24 object-cover rounded-full"
        />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-bold text-gray-800">{brand_name}</h2>
        <p className="text-sm text-gray-500 mt-1">Category: {category}</p>
        <p className="text-lg font-black text-black mt-2">
          Total Coupons: {coupons.length}
        </p>
      </div>
      <Link to={`brand/${_id}`} className="px-4 bg-[#2C8BBF] text-white py-2 mt-4 rounded-lg font-semibold hover:bg-[#2c8cbfbe] transition mx-auto block text-center">
        View Coupons
      </Link>
    </div>
  );
};

BrandOnSellCard.propTypes = {
    brand: PropTypes.object,
}

export default BrandOnSellCard;
