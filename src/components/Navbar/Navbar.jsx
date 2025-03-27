import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { MdOutlineChildCare } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { LiaMaleSolid,LiaFemaleSolid  } from "react-icons/lia";
import { FiShoppingCart } from "react-icons/fi";



const Navbar = () => {
  const location = useLocation();
  const [menu, setMenu] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setMenu("Home");
    else if (path.includes("/mens")) setMenu("mens");
    else if (path.includes("/womens")) setMenu("womens");
    else if (path.includes("/kids")) setMenu("kids");
    else if (path.includes("/profile")) setMenu("profile");
  }, [location.pathname]); 

  return (
    <header className="bg-white fixed top-0 w-full shadow-md z-50">
      <nav className="mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              onClick={() => window.scrollTo(0, 0)}
              src="/Assets/vibecart.png"
              alt="logo"
              className="w-30 h-10"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-12 text-2xl font-semibold">
          <li className={`${menu === "Home" ? "border-b-2 border-blue-500" : ""}`}>
            <Link to="/" className="text-gray-600 hover:text-gray-800">
              Home
            </Link>
          </li>
          <li className={`${menu === "mens" ? "border-b-2 border-blue-500" : ""}`}>
            <Link to="/mens" className="text-gray-600 hover:text-gray-800">
              Mens
            </Link>
          </li>
          <li className={`${menu === "womens" ? "border-b-2 border-blue-500" : ""}`}>
            <Link to="/womens" className="text-gray-600 hover:text-gray-800">
              Womens
            </Link>
          </li>
          <li className={`${menu === "kids" ? "border-b-2 border-blue-500" : ""}`}>
            <Link to="/kids" className="text-gray-600 hover:text-gray-800">
              Kids
            </Link>
          </li>
          <li className={`${menu === "profile" ? "border-b-2 border-blue-500" : ""}`}>
            <Link to="/profile" className="text-gray-600 hover:text-gray-800">
              Profile
            </Link>
          </li>
        </ul>

        {/* Cart and Login */}
        <div className="hidden md:flex items-center gap-4 pr-10"> 
          <Link to="/login">
            <button onClick={() => window.scrollTo(0, 0)} className="bg-blue-500 hover:bg-gray-300 text-white font-semibold py-2 px-4 rounded-full">
              Login
            </button>
          </Link>
          <Link to="/cart" className="relative">
          <FiShoppingCart size={28} />
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-sm rounded-full flex items-center justify-center">
              {getTotalCartItems()}
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl pr-5" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <MdClose /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul  onClick={() => window.scrollTo(0, 0)} className="md:hidden bg-white shadow-lg py-4">
          {[
            { name: "mens", icon: <LiaMaleSolid /> },
            { name: "womens", icon: <LiaFemaleSolid  /> },
            { name: "kids", icon: <MdOutlineChildCare /> },
          ].map((item) => (
            <li
              key={item.name}
              onClick={() => {
                setMenu(item.name);
                toggleMobileMenu(); // Close menu on selection
              }}
              className="py-2 px-4 border-b border-gray-200 flex items-center gap-2"
            >
              <Link to={`/${item.name}`} className="text-gray-600 capitalize  flex items-center gap-2">
                {item.icon} {/* Displaying corresponding icon */}
                {item.name}
              </Link>
            </li>
          ))}
          <li onClick={() => window.scrollTo(0, 0)} className="py-2 px-4 flex items-center gap-2">
            <Link to="/login" className="text-gray-600  flex items-center gap-2">
              <FiUser />
              Login
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
