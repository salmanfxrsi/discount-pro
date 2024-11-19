import { useEffect } from "react";
import BannerSlider from "../components/BannerSlider";

const HomePageLayout = () => {
    useEffect(() => {
        document.title = "Discount Pro - Home"
      },[])

    return (
        <div>
            <header className="mx-auto container my-24">
                <BannerSlider></BannerSlider>
            </header>
            <main>
                <BrandOnSell></BrandOnSell>
            </main>
        </div>
    );
};

export default HomePageLayout;