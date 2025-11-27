import React, { useEffect, useState } from "react";
import Logo from "/logo.png";
import { Link } from "react-router-dom";
import { Search, Settings, ShoppingBag, User } from "lucide-react";
import SearchSection from "../Sections/SearchSection";
import { DropDownLoggedIn } from "../index";
import { DropDownLoggedOut } from "../index";
import { useCart } from "../../context/CartContext";

const Header = () => {
  const [searchToggle, setSearchToggle] = useState(false);
  const { cartList } = useCart();
  const [dropDown, setDropDown] = useState(false);
  const token = JSON.parse(sessionStorage.getItem("token"));
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <header>
      <nav className="bg-neutral-primary dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-7" alt="CodeBook Logo" />
            <span className="self-center dark:text-white text-xl text-heading font-semibold whitespace-nowrap">
              CodeBook
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Settings
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5"
            />
            <Search
              onClick={() => setSearchToggle(!searchToggle)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5"
            />
            <Link to={"/cart"}>
              <span className="relative">
                <ShoppingBag className="cursor-pointer  text-xl text-gray-700 dark:text-white mr-5" />
                <span className="rounded-full bg-red-500 absolute -top-3 left-2.5 px-1">
                  {cartList.length}
                </span>
              </span>
            </Link>
            <div className="relative ">
              <User
                onClick={() => setDropDown(!dropDown)}
                className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 "
              />
              <div className="absolute -top-2 left-6 ">
                {dropDown &&
                  (token ? (
                    <DropDownLoggedIn setDropDown={setDropDown} />
                  ) : (
                    <DropDownLoggedOut setDropDown={setDropDown} />
                  ))}
              </div>
            </div>

            <Link
              to="/"
              className="text-sm font-medium text-fg-brand hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
      {searchToggle && (
        <SearchSection
          searchToggle={searchToggle}
          setSearchToggle={setSearchToggle}
        />
      )}
    </header>
  );
};

export default Header;
