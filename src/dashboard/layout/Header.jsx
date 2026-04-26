import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Courses",
    "Videos",
    "FAQ",
    "Location",
    "Contact",
  ];

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-1 rounded-lg text-xl">
            🎓
          </div>
          <h2 className="font-bold text-lg text-gray-800">EduManage</h2>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-1 mx-6 gap-4 text-sm font-medium text-gray-700 overflow-x-auto whitespace-nowrap">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-2xl text-gray-700 hover:text-blue-600 transition-colors duration-300">
            <FaUserCircle />
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors duration-300">
            Enroll Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto md:hidden text-2xl text-gray-700 hover:text-blue-600 transition-colors duration-300"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-3 border-t border-gray-200">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block text-gray-700 font-medium py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {item}
            </a>
          ))}

          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200">
            <FaUserCircle />
            Login
          </button>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            Enroll Now
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
