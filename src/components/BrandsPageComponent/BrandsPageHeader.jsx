const BrandsPageHeader = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-center text-[#2C8BBF]  text-3xl font-black">
        Explore Brands
      </h1>
      <div className="form-control">
        <input
          type="text"
          placeholder="Search Shop"
          className="input input-bordered border-4 border-slate-300 text-white placeholder:text-white w-24 md:w-auto bg-[#2C8BBF] "
        />
      </div>
    </div>
  );
};

export default BrandsPageHeader;
