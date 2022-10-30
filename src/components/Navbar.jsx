import { CgMenuRight, CgClose } from "react-icons/cg";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex items-center justify-between bg-transeparent text-white px-5 py-5 absolute top-0 left-0 w-[100vw]">
      <div className="flex items-center justify-center space-x-3">
        <img src="/img/logo.png" alt="Logo" />
        <span className="text-4xl">playo</span>
      </div>
      {showMenu && (
        <div className="absolute bg-black py-4 top-[6.5rem] w-[100vw] left-0 pl-5">
          <ul className="flex flex-col">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pages">Pages</Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/contactUs">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
      <div className="flex items-center justify-center space-x-5">
        <div>
          <HiShoppingCart size="1.5rem" color="white" />
        </div>
        <div onClick={handleMenu} className="cursor-pointer">
          {showMenu ? (
            <CgClose size="1.8rem" color="white" />
          ) : (
            <CgMenuRight size="1.8rem" color="white" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
