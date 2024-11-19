import { useEffect } from "react";
import BannerSlider from "../components/BannerSlider";
import { useLoaderData } from "react-router-dom";
import BrandOnSellCard from "../components/BrandOnSell";
import TopBrandsCard from "../components/TopBrandsCard.jsx";
import Marquee from "react-fast-marquee";

const HomePageLayout = () => {
  const { onSaleShop } = useLoaderData();
  const { data } = useLoaderData();


  useEffect(() => {
    document.title = "Discount Pro - Home";
  }, []);

  return (
    <div className="winter-snow">
      <header className="mx-auto container py-24">
        <BannerSlider></BannerSlider>
      </header>
      <main className="pb-24">
        {/* Top Brands Section */}
        <div className="w-11/12 lg:container mx-auto bg-white p-6 rounded-3xl mb-24">
        <Marquee>
            <div className="flex gap-6">
            {data.map(brand => <TopBrandsCard key={brand._id} brand={brand}></TopBrandsCard>)}
            </div>
            </Marquee>
        </div>
        {/* Brands On Sell Section */}
        <section className="w-11/12 lg:container mx-auto">
          <h1 className="font-black text-3xl text-[#2C8BBF] text-center mb-12">
            Brands on Sell: Your Gateway to Savings! 💸
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
            {onSaleShop?.map((brand) => (
              <BrandOnSellCard key={brand._id} brand={brand}></BrandOnSellCard>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePageLayout;
