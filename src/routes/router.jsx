import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePageLayout from "../layouts/HomePageLayout";
import BrandsPageLayout from "../layouts/BrandsPageLayout";
import ProfilePageLayout from "../layouts/ProfilePageLayout";
import DevPageLayout from "../layouts/DevPageLayout";

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
            loader: () => fetch("CouponData.json")
        },
        {
            path: "/profile",
            element: <ProfilePageLayout></ProfilePageLayout>
        },
        {
            path: "/developer",
            element: <DevPageLayout></DevPageLayout>
        },
      ]
    },
  ]);

export default router;