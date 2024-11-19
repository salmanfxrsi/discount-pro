import { Link, NavLink } from "react-router-dom";
import "../Navbar/navbar.css";
import { FaDev, FaHome } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { AiFillProfile } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);

  const links = (
    <>
      <NavLink
        to={"/"}
        className="font-black text-white flex gap-0.5 items-center"
      >
        <FaHome></FaHome>
        <p>Home</p>
      </NavLink>
      <NavLink
        to={"/brands"}
        className="font-black text-white flex items-center gap-0.5"
      >
        <GiShoppingBag></GiShoppingBag>
        <p>Brands</p>
      </NavLink>
      {user && (
        <NavLink
          to={"/profile"}
          className="font-black text-white flex items-center gap-0.5"
        >
          <AiFillProfile />
          <p>My Profile</p>
        </NavLink>
      )}
      <NavLink
        to={"/developer"}
        className="font-black text-white flex items-center gap-0.5"
      >
        <FaDev></FaDev>
        <p>About Dev</p>
      </NavLink>
    </>
  );

  return (
    <div className="bg-winter-navbar py-2">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-winter-navbar rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </div>
          </div>
          <Link to={"/"} className="text-xl font-black text-white">
            Discount Pro
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal flex gap-3">{links}</div>
        </div>
        <div className="navbar-end">
          {!user ? (
            <Link to={"/login"} className="btn">
              Login
            </Link>
          ) : (
            <button onClick={handleSignOut} className="btn">
              Logout
            </button>
          )}
        </div>
      </div>
      {user && (
        <p className="text-xl font-black text-white text-center mb-2">
          Welcome {user.displayName}
        </p>
      )}
    </div>
  );
};

export default Navbar;
