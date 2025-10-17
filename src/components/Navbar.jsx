import React from "react";
import { Link, NavLink } from "react-router-dom";
import Icon from "/IconImage.jpeg";
import { MdPerson } from "react-icons/md";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logoutUser, setUser } = useAuth();
  
  const handleSignOut = () => {
    logoutUser()
      .then(() => {
        setUser(null);
      })
      .catch(() => {});
  };

  const menu = [
    { item: "HOME", route: "/" },
    { item: "ALL FOOD", route: "/allFood" },
    { item: "ADD FOOD", route: "/addFood" },
    { item: "MY FOOD", route: "/myFood" },
    { item: "REQUESTED FOOD", route: "myRequest" },
    { item: "ABOUT US", route: "/aboutUs" },
  ];

  const links = menu.map((items, idx) => (
    <li key={idx} className="">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white bg-[#E03E20] rounded-2xl py-1 px-6 font-semibold"
            : "hover:text-[#E03E20]"
        }
        to={`${items.route}`}
      >
        {items.item}
      </NavLink>
    </li>
  ));

  return (
    <div className="navbar bg-gray-100 text-black top-0 z-2 shadow-sm sticky pr-15">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="pl-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className=" dropdown-content pl-4 bg-[rgb(250,250,250)]  rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="pl-3 mb-1 font-extrabold  text-2xl nunito bg-gradient-to-r from-orange-600 to-green-600 text-transparent bg-clip-text flex items-center gap-3">
          <img className="w-10 rounded-4xl" src={Icon} alt="" />
          TastyShare
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-3 menu-horizontal px-1 ">{links}</ul>
      </div>
      <div className="navbar-end gap-2 nunito">
        {user && user?.email ? (
          <>
            <Link
              onClick={handleSignOut}
              className="bg-[#E03E20] hover:bg-orange-700 text-white rounded-2xl py-1 px-6 font-semibold"
            >
              LogOut
            </Link>
            <div className="w-10 relative group">
              <img
                className="cursor-pointer rounded-full w-10 h-10"
                src={user?.photoURL}
                alt=""
              />
              <div className="absolute top-10 opacity-0 group-hover:opacity-100 font-bold">
                {user?.displayName}
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <MdPerson className="text-xl" />
              <Link to="/signIn"> Login</Link>
            </div>
            <Link to="/signUp">Register</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
