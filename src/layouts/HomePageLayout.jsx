import { useEffect } from "react";
import BannerSlider from "../components/BannerSlider";
import { useLoaderData } from "react-router-dom";
import BrandOnSellCard from "../components/BrandOnSell";
import TopBrandsCard from "../components/TopBrandsCard.jsx";
import Marquee from "react-fast-marquee";
import OurMotive from "../components/OurMotive.jsx";
import Stat from "../components/Stat.jsx";

const HomePageLayout = () => {
  const { onSaleShop } = useLoaderData();
  const { data } = useLoaderData();

  useEffect(() => {
    document.title = "Discount Pro - Home";
  }, []);

  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      className="winter-snow"
    >
      <header
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="mx-auto w-11/12 lg:container py-24"
      >
        <BannerSlider></BannerSlider>
      </header>
      <main className="pb-24">
        {/* Top Brands Section */}
        <section className="w-11/12 lg:container mx-auto bg-white p-6 rounded-3xl mb-24">
          <Marquee pauseOnHover>
            <div className="flex gap-6">
              {data.map((brand) => (
                <TopBrandsCard key={brand._id} brand={brand}></TopBrandsCard>
              ))}
            </div>
          </Marquee>
        </section>
        {/* Brands On Sell Section */}
        <section className="w-11/12 lg:container mx-auto">
          <h1 className="font-black text-3xl text-black text-center mb-16">
            Your Gateway to Savings! On Sale 
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
            {onSaleShop?.map((brand) => (
              <BrandOnSellCard key={brand._id} brand={brand}></BrandOnSellCard>
            ))}
          </div>
        </section>
        <section className="w-11/12 lg:container mx-auto my-24">
          <Stat data={data} onSaleShop={onSaleShop}></Stat>
        </section>
        <section className="mt-24">
          <OurMotive></OurMotive>
        </section>
      </main>
    </div>
  );
};

export default HomePageLayout;
