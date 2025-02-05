import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="shadow-lg py-4 px-2 flex justify-center items-center">
      <div className="template flex justify-between items-center w-full">
        <div>
          <Link to={"/"}>
            <strong className="text-orange-600 text-2xl px-3 py-4 rounded">
              Eliz Manav
            </strong>
          </Link>
        </div>

        <div className="hidden xl:flex lg:flex md:flex justify-center items-center gap-">
          <input
            type="search"
            className="w-[300px] bg-gray-200 px-3 py-2 rounded focus:outline-none font-bold"
            placeholder="Ürün Ara"
          />
          <button className="p-3 hover:rounded-full transition-all  rounded text-white bg-orange-500 cursor-pointer">
            <FaSearch />
          </button>
        </div>

        <div className="flex justify-center items-center gap-2 xl:hidden lg:hidden md:hidden">
          <strong className="text-white text-xl">
            <FaSearch />
          </strong>
          <input
            type="search"
            className="w-[150px] bg-gray-100 px-3 py-1 rounded focus:outline-none"
            placeholder="Ürün Ara"
          />
        </div>
      </div>
    </div>
  );
}
