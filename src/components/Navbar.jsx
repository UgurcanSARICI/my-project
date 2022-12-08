import React, { useState } from "react";
import { GiHamburgerMenu, GiWorld } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <ul className="absolute bg-red-600 p-4 right-0 top-6 z-10">
      {["Türkçe", "English", "German"].map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
};

const HamburgerMenu = () => {
  const navigate = useNavigate();
  return (
    <ul className="z-[999] flex md:hidden justify-center flex-col bg-slate-400 first-letter:items-center gap-4 absolute top-[2rem] p-4 right-0">
      {["Hakkımızda", "Neden Biz?", "Ürünler", "S.S.S", "İletişim"].map(
        (item, idx) => (
          <li
            onClick={() => idx === 2 && navigate("/products")}
            key={idx}
            className="text-lg cursor-pointer"
          >
            {item}
          </li>
        )
      )}
    </ul>
  );
};

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  const handleClick = (control) => {
    if (control === "dropdown") {
      setIsActive(false);
      setDropdown(!dropdown);
    } else {
      setDropdown(false);
      setIsActive(!isActive);
    }
  };

  return (
    <div className="bg-[#e5e5e5e5] p-5">
      <div className="max-w-sm sm:max-w-screen-lg mx-auto flex justify-between items-center">
        <img
          src="https://www.ray-ban.com/rbstatichtml/assets/images/red-logo.svg"
          alt="logo"
          className="w-[12rem] cursor-pointer"
          onClick={() => navigate("/")}
        />
        <ul className="hidden md:flex justify-center cursor-pointer items-center gap-4">
          {["Hakkımızda", "Neden Biz?", "Ürünler", "S.S.S", "İletişim"].map(
            (item, idx) => (
              <li
                onClick={() => idx === 2 && navigate("/products")}
                key={idx}
                className="text-lg"
              >
                {item}
              </li>
            )
          )}
        </ul>
        <div className="relative cursor-pointer">
          <div className="flex justify-center items-center gap-3">
            <p
              className="flex items-center justify-center"
              onMouseOver={() => handleClick("dropdown")}
              onMouseLeave={() => setDropdown(false)}
            >
              <GiWorld /> TR
            </p>
            <span className="md:hidden" onClick={() => handleClick()}>
              <GiHamburgerMenu />
            </span>
            {dropdown && <DropdownMenu />}
            {isActive && <HamburgerMenu />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
