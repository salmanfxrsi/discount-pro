import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TopBrandsCard = ({ brand }) => {
  const { _id, brand_logo, brand_name, coupons, category } = brand;

  return (
    <div
      className=" bg-winter rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 cursor-pointer mx-6 my-2"
    >
      <Link to={`/brand/${_id}`} className="flex justify-center">
        <img
          src={brand_logo}
          alt={brand_name}
          className="w-24 h-24 object-cover rounded-full"
        />
      </Link>
      <div className="text-center mt-4">
        <h2 className="text-xl font-bold text-gray-800">{brand_name}</h2>
        <p className="text-sm text-gray-500 mt-1">Category: {category}</p>
        <p className="text-lg font-semibold text-black mt-2">
          Total Coupons: {coupons.length}
        </p>
      </div>
    </div>
  );
};

TopBrandsCard.propTypes = {
  brand: PropTypes.object,
}

export default TopBrandsCard;
