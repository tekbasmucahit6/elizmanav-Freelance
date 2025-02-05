import { Link } from "react-router-dom";
import { FaHome, FaBox, FaUserShield, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobil Menü Butonu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md lg:hidden"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300 ${
          isOpen ? "w-56" : "w-0"
        } lg:w-56 lg:relative lg:flex p-4 flex-col gap-6 overflow-hidden`}
      >
        <h2 className={`text-2xl font-bold ${isOpen ? "block" : "hidden"} lg:block`}>
          Admin Paneli
        </h2>
        <ul className="space-y-4">
          <li>
            <Link to="/admin" className="flex items-center gap-3 hover:text-gray-300">
              <FaHome size={24} />
              <span className={`${isOpen ? "block" : "hidden"} lg:block`}>Ana Sayfa</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/products" className="flex items-center gap-3 hover:text-gray-300">
              <FaBox size={24} />
              <span className={`${isOpen ? "block" : "hidden"} lg:block`}>Ürünler</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/users" className="flex items-center gap-3 hover:text-gray-300">
              <FaUserShield size={24} />
              <span className={`${isOpen ? "block" : "hidden"} lg:block`}>Kullanıcılar</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
