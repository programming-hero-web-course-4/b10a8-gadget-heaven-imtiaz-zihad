import { Link, NavLink, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <div
      className={`navbar mt-3 w-4/5 mx-auto  z-50 ${
        pathname === "/"
          ? "bg-[#9538E2] rounded-2xl text-white font-bold"
          : "bg-white/30"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
              }
              to="/statics"
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
              }
              to="/abouts"
            >
              About Us
            </NavLink>
          </ul>
        </div>
        <Link to="/" className=" text-xl">
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">
          <NavLink
            className={({ isActive }) =>
              `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
            }
            to="/statics"
          >
            Statistics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
            }
            to="/abouts"
          >
            About Us
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end flex gap-5">
        <div className=" bg-white rounded-full card shadow-3xl ">
          <FaShoppingCart className="p-2 text-3xl text-black" />
        </div>
        <div className="text-3xl bg-white rounded-full card shadow-3xl ">
          <FaRegHeart className="p-2 text-black" />
        </div>
      </div>

      {pathname === "/" && (
        <div className="hidden absolute p-3 bg-warning rounded-full cursor-pointer -top-5 -right-5"></div>
      )}
    </div>
  );
};

export default NavBar;
