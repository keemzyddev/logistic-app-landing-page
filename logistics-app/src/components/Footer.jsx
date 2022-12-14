import {
  FaBus,
  FaFacebook,
  FaTwitter,
  FaGooglePlus,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1140px] w-full py-8 m-auto border-t-4">
      <div className="flex items-center justify-center m-auto">
        <FaBus size={30} className="text-[var(--primary-dark)] mr-2" />
        <h1 className="text-xl font-bold text-[var(--primary-dark)]">
          LOGISTICS
        </h1>
        <div className="flex justify-between ">
          <FaFacebook className="mx-4 cursor-pointer text-[var(--primary-dark)]" />
          <FaTwitter className="mx-4 cursor-pointer text-[var(--primary-dark)]" />
          <FaGooglePlus className="mx-4 cursor-pointer text-red-700" />
          <FaInstagram className="mx-4 cursor-pointer text-pink-900" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
