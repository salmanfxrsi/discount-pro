import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.webp";
import { FaDev, FaHome } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { AiFillProfile } from "react-icons/ai";
import "../Header/Header.css";

const Header = () => {
  const links = (
    <>
      <NavLink
        to={"/"}
        className="text-xl font-black text-[#2C8BBF] flex items-center gap-0.5"
      >
        <FaHome></FaHome>
        <p>Home</p>
      </NavLink>
      <NavLink
        to={"/brands"}
        className="text-xl font-black text-[#2C8BBF] flex items-center gap-0.5"
      >
        <GiShoppingBag></GiShoppingBag>
        <p>Brands</p>
      </NavLink>
      <NavLink
        to={"/profile"}
        className="text-xl font-black text-[#2C8BBF] flex items-center gap-0.5"
      >
        <AiFillProfile />
        <p>My Profile</p>
      </NavLink>
      <NavLink
        to={"/developer"}
        className="text-xl font-black text-[#2C8BBF] flex items-center gap-0.5"
      >
        <FaDev></FaDev>
        <p>About Dev</p>
      </NavLink>
    </>
  );

  return (
    <div className="hero bg-winter py-12">
      <div className="hero-content flex-col lg:flex-row gap-8">
        <img src={logo} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-3xl lg:text-5xl font-black text-[#2C8BBF] text-center">
            {" "}
            Grab Your Coupons!
          </h1>
          <h1 className="text-2xl font-black mt-3 text-center text-[#2C8BBF]">
            salmanxprivate@gmail.com
          </h1>
          <div className="navbar-center flex mt-4 justify-center">
            <div className="menu-horizontal gap-3 flex-wrap justify-center">
              {links}
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <Link
              to={"/login"}
              className="px-4 py-1.5 bg-[#2C8BBF] hover:bg-[#2c8cbfbe] rounded-lg text-white font-black text-xl"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
