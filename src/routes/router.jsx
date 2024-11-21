import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePageLayout from "../layouts/HomePageLayout";
import BrandsPageLayout from "../layouts/BrandsPageLayout";
import ProfilePageLayout from "../layouts/ProfilePageLayout";
import DevPageLayout from "../layouts/DevPageLayout";
import BrandDetailsPage from "../components/BrandDetailsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import PrivateRoute from "./PrivateRoute";
import UpdateProfilePage from "../pages/UpdateProfilePage";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <HomePageLayout></HomePageLayout>,
            loader: async() => {
              const res = await fetch("/CouponData.json")
              const data = await res.json()
              const onSaleShop = data.filter(shop => shop.isSaleOn)
              return {onSaleShop,data}
            }
        },
        {
            path: "/brands",
            element: <BrandsPageLayout></BrandsPageLayout>,
            loader: () => fetch("/CouponData.json")
        },
        {
            path: "/profile",
            element: <PrivateRoute><ProfilePageLayout></ProfilePageLayout></PrivateRoute>
        },
        {
            path: "/developer",
            element: <DevPageLayout></DevPageLayout>
        },
        {
          path: "/brand/:id",
          element: <PrivateRoute><BrandDetailsPage></BrandDetailsPage></PrivateRoute>,
          loader: async({params}) => {
            const response = await fetch("/CouponData.json")
            const data = await response.json()
            const singleShopData = data.find(singleShop => singleShop._id == params.id)
            return singleShopData
          }
        },
        {
          path: "/login",
          element: <LoginPage></LoginPage>
        },
        {
          path: "/registration",
          element: <RegistrationPage></RegistrationPage>
        },
        {
          path: "/update-profile",
          element: <UpdateProfilePage></UpdateProfilePage>
        },
        {
          path: "/forget-password",
          element: <ForgetPasswordPage></ForgetPasswordPage>
        },
      ]
    },
  ]);

export default router;