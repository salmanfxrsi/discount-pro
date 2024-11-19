import { useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Link, useLoaderData } from "react-router-dom";
import ReactStars from "react-stars";
import { toast } from "react-toastify";

const BrandDetails = () => {
  const { brand_name, rating, brand_logo, coupons, shop_Link } =
    useLoaderData();


  useEffect(() => {
    document.title = `Discount Pro - ${brand_name}`;
  }, [brand_name]);

  return (
    <div className="flex justify-center py-24 winter-snow">
      <div className="p-4 bg-winter rounded-lg">
        {/* Brand Header */}
        <div className="flex items-center mb-6">
          <img
            src={brand_logo}
            alt={brand_name}
            className="w-24 h-24 object-cover mr-4"
          />
          <div>
            <h1 className="text-3xl font-bold">{brand_name}</h1>
            <div className="flex items-center gap-1 text-yellow-400 font-black">
              <ReactStars value={rating}></ReactStars>
              <span className="ml-1">{rating}</span>
            </div>
          </div>
        </div>

        {/* Coupons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {coupons.map((coupon, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow-md flex flex-col justify-between h-full bg-white"
            >
              <h2 className="text-xl font-semibold mb-2">
                {coupon.description}
              </h2>
              <p className="mb-2">
                <strong>Type:</strong> {coupon.coupon_type}
              </p>
              <p className="mb-2">
                <strong>Conditions:</strong> {coupon.condition}
              </p>
              <p className="mb-2">
                <strong>Expiry Date:</strong> {coupon.expiry_date}
              </p>

              <CopyToClipboard text={coupon.coupon_code}>
                <button
                onClick={()=>toast.success("Promo Code Copied")}
                  className="bg-[#2C8BBF] text-white py-2 mt-2 rounded hover:bg-[#2c8cbfbe] w-full"
                >
                  Copy Code
                </button>
              </CopyToClipboard>

              <Link
                to={shop_Link}
                className="bg-green-500 text-white py-2 mt-2 rounded hover:bg-green-600 w-full text-center"
              >
                Use Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;
