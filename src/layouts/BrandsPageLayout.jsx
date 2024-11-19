import { useLoaderData } from "react-router-dom";
import BrandsPageHeader from "../components/BrandsPageComponent/BrandsPageHeader";
import ShopCard from "../components/BrandsPageComponent/ShopCard";
import { useEffect } from "react";

const BrandsPageLayout = () => {
  const shops = useLoaderData();

  useEffect(() => {
    document.title = "Discount Pro - Brands"
  },[])

  return (
    <div className="py-24 winter-snow">
      <header className="w-11/12 lg:container mx-auto">
        <BrandsPageHeader></BrandsPageHeader>
      </header>
      <main className="grid grid-cols-1 w-11/12 lg:container mx-auto gap-6 mt-12">
        {shops.map(shop => <ShopCard key={shop._id} shop={shop}></ShopCard>)}
      </main>
    </div>
  );
};

export default BrandsPageLayout;
