import { useState } from "react";
import {
  FaBars,
  FaFacebook,
  FaTwitter,
  FaGooglePlus,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-yellow-500 ">
      <ul className="hidden sm:flex px-4 ">
        <li className="text-2xl py-8 hover:bg-blue-600 cursor-pointer">
          <a href="/">HOME</a>
        </li>
        <li className="text-2xl py-8 hover:bg-blue-600 cursor-pointer">
          <a href="#gallery">GALLERY</a>
        </li>
        <li className="text-2xl py-8 hover:bg-blue-600 cursor-pointer">
          <a href="#about">DEALS</a>
        </li>
        <li className="text-2xl py-8 hover:bg-blue-600 cursor-pointer">
          <a href="#contact">CONTACT</a>
        </li>
        <li className="text-2xl py-8 hover:bg-blue-600 cursor-pointer">
          <a href="#about">ABOUT</a>
        </li>
      </ul>
      <div className="flex justify-between">
        <FaFacebook className="mx-4 cursor-pointer" />
        <FaTwitter className="mx-4 cursor-pointer" />
        <FaGooglePlus className="mx-4 cursor-pointer" />
        <FaInstagram className="mx-4 cursor-pointer" />
      </div>

      <div className="sm:hidden z-10" onClick={handleNav}>
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>
      <div
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
            : "absolute top-0h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="#gallery">GALLERY</a>
          </li>
          <li>
            <a href="#about">DEALS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
