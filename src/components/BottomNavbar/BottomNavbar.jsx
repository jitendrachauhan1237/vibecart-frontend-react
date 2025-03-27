import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { FiMenu, FiHome, FiShoppingCart, FiUser, FiSmile } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const BottomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For toggling the throw-up menu
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the throw-up menu
  };

  return (
    <>
      {/* Throw-up Menu */}
      <div
        className={`fixed left-0 right-0 bottom-12 z-50 md:hidden bg-white shadow-lg transition-transform duration-300 ${
          isMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ height: "150px" }} // Adjust the height of the throw-up menu
      >
        {isMenuOpen && (
          <ul  onClick={() => window.scrollTo(0, 0)} className="flex flex-col justify-center items-start h-full">
            {[
              { category: "mens", icon: <FiUser color="#00c9ff" size={24} /> },
              { category: "womens", icon: <FiUser color="#ed20ff" size={24} /> }, // You can adjust or choose a more feminine icon if desired
              { category: "kids", icon: <FiSmile color="#fa1336" size={24} /> },
            ].map(({ category, icon }) => (
              <li
                key={category}
                onClick={() => setIsMenuOpen(false)} // Close menu after selection
                className="py-2 px-4 border-b border-gray-200 w-full flex items-center"
              >
                <Link to={`/${category}`} className="text-gray-600 flex items-center gap-2 capitalize">
                  {icon} {category}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Bottom Navbar for Mobile */}
      <nav className="fixed bottom-0 w-full bg-white shadow-t z-50 md:hidden">
        <ul onClick={() => window.scrollTo(0, 0)} className="flex justify-between items-center py-2 px-6 text-gray-700">
          {/* Home Button */}
          <li className="flex flex-col items-center">
            <Link to="/" className="flex flex-col items-center">
              <FiHome size={24} />
              <span className="text-xs">Home</span>
            </Link>
          </li>

          {/* Menu Button */}
          <li onClick={toggleMenu} className="flex flex-col items-center">
            {isMenuOpen ? <MdClose size={24} /> : <FiMenu size={24} />}
            <span className="text-xs">Menu</span>
          </li>

          {/* Cart Button */}
          <li className="relative flex flex-col items-center">
            <Link to="/cart" className="flex flex-col items-center">
              <FiShoppingCart size={24} />
              <span className="text-xs">Cart</span>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {getTotalCartItems()}
              </div>
            </Link>
          </li>

          {/* Profile Button */}
          <li onClick={() => window.scrollTo(0, 0)} className="flex flex-col items-center">
            <Link to="/profile" className="flex flex-col items-center">
              <FiUser size={24} />
              <span className="text-xs">Profile</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default BottomNavbar;
