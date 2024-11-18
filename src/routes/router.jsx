import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePageLayout from "../layouts/HomePageLayout";
import BrandsPageLayout from "../layouts/BrandsPageLayout";
import ProfilePageLayout from "../layouts/ProfilePageLayout";
import DevPageLayout from "../layouts/DevPageLayout";
import BrandDetailsPage from "../components/BrandDetailsPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <HomePageLayout></HomePageLayout>
        },
        {
            path: "/brands",
            element: <BrandsPageLayout></BrandsPageLayout>,
            loader: () => fetch("/CouponData.json")
        },
        {
            path: "/profile",
            element: <ProfilePageLayout></ProfilePageLayout>
        },
        {
            path: "/developer",
            element: <DevPageLayout></DevPageLayout>
        },
        {
          path: "/brand/:id",
          element: <BrandDetailsPage></BrandDetailsPage>,
          loader: async({params}) => {
            const response = await fetch("/CouponData.json")
            const data = await response.json()
            const singleShopData = data.find(singleShop => singleShop._id == params.id)
            return singleShopData
          }
        }
      ]
    },
  ]);

export default router;