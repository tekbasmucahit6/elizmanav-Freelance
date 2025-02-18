import { useSearch } from "../../../hooks/useSearch";



const Products: React.FC = () => {
  return (
    <div className="w-full py-2">
      <div className="w-full flex justify-center items-center text-black text-center py-5">
        <strong className="text-2xl w-full">Reyon</strong>
      </div>
      <div className="p-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {(() => (
          <div
            key={id}
            className="bg-[#8B5A2B] rounded-2xl shadow-md hover:scale-110 transition-all flex flex-col items-center"
          >
            <img
              src={image}
              alt={name}
              className="w-48 object-contain rounded-t-2xl pt-3"
            />
            <div className="p-4 text-center flex flex-col justify-end h-full">
              <h2 className="text-lg font-medium text-white">
                {/* Kahverengi tonu */}
                {name}
              </h2>
              <p className="text-green-400 font-bold mt-2">
                {/* Koyu kahverengi tonu */}
                {price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
