import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
export default function Navbar() {
  return (
    <div className="bg-orange-400 py-4 px-2 flex justify-between items-center">
      <div>
        <Link to={"/"}>
          <strong className="text-white text-2xl">Elize Manav</strong>
        </Link>
      </div>


      <div className="hidden xl:flex lg:flex md:flex justify-center items-center gap-2">
        <input
          type="search"
          className="w-[300px] bg-gray-100 px-3 py-1 rounded focus:outline-none"
          placeholder="Ürün Ara"
        />
        <button className="px-3 py-1 text-white bg-blue-500 rounded cursor-pointer">
          Ara
        </button>
      </div>

      <div className="flex justify-center items-center gap-2 xl:hidden lg:hidden md:hidden">
        <strong className="text-white text-xl"><FaSearch /></strong>
        <input type="search" className="w-[150px] bg-gray-100 px-3 py-1 rounded focus:outline-none" placeholder="Ürün Ara" />
      </div>
    </div>
  );
}
