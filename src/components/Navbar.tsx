import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar: React.FC = () => {


  return (
    <div className="shadow-lg py-4 px-2 flex justify-center items-center">
      <div className="template flex justify-between xl:justify-start px-3 gap-6 items-center w-full relative">
        <div className="">
          <Link to={"/"}>
            <strong className="text-orange-600 text-2xl py-4 rounded">
              Eliz Manav
            </strong>
          </Link>
        </div>

        <div className="hidden xl:flex lg:flex md:flex justify-center items-center w-4/6 absolute left-1/2 transform -translate-x-1/2">
          <input
            type="search"
            className="w-full bg-gray-200/50 px-3 py-2 rounded focus:outline-none font-bold"
            placeholder="Ürün Ara"
          />
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

export default Navbar;