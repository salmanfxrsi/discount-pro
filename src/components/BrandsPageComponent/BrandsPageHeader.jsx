import { FiSearch } from "react-icons/fi";

const BrandsPageHeader = () => {
  return (
    <div className="flex sm:justify-between flex-col sm:flex-row gap-4 sm:gap-0">
      <h1 className="text-center text-[#2C8BBF]  text-3xl font-black">
        Explore Brands
      </h1>
      <div className="relative w-48 ml-[125px]">
        <input
          type="text"
          placeholder="Search Shop"
          className="input input-bordered border-4 border-slate-300 text-white placeholder:text-white w-full bg-[#2C8BBF] pr-10 pl-4"
        />
        <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default BrandsPageHeader;
