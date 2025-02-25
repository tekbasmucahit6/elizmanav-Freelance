import { useEffect, useState } from "react";

interface Product {
  Productsid: number;
  ProductsName: string;
  ProductsPrice: string;
  ProductsImg: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const BaseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
  const baseImgUrl = import.meta.env.VITE_REACT_APP_BASE_IMG_URL;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${BaseUrl}/getAllProduct`);
      if (!response.ok) throw new Error("Ürünleri getirirken hata oluştu");
      const data: Product[] = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full py-2">
      <div className="w-full flex justify-center items-center text-black text-center py-5">
        <strong className="text-2xl w-full">Reyon</strong>
      </div>
      <div className="p-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.Productsid}
            className="bg-[#8B5A2B] rounded-2xl shadow-md hover:scale-110 transition-all flex flex-col items-center"
          >
            <img
              src={`${baseImgUrl}${product.ProductsImg}`}
              alt={product.ProductsName}
              className="w-48 object-contain rounded-t-2xl pt-3"
            />
            <div className="p-4 text-center flex flex-col justify-end h-full">
              <h2 className="text-lg font-medium text-white">
                {product.ProductsName}
              </h2>
              <p className="text-green-400 font-bold mt-2">
                {product.ProductsPrice} TL
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;