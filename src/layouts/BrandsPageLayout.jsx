import { useLoaderData } from "react-router-dom";
import BrandsPageHeader from "../components/BrandsPageComponent/BrandsPageHeader";
import ShopCard from "../components/BrandsPageComponent/ShopCard";

const BrandsPageLayout = () => {
  const shops = useLoaderData();

  return (
    <div>
      <header className="container mx-auto">
        <BrandsPageHeader></BrandsPageHeader>
      </header>
      <main className="grid grid-cols-1 container mx-auto gap-6 mt-12">
        {shops.map(shop => <ShopCard key={shop._id} shop={shop}></ShopCard>)}
      </main>
    </div>
  );
};

export default BrandsPageLayout;
