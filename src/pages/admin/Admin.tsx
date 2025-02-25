import { useEffect, useState } from "react";

interface Product {
  Productsid: number;
  ProductsName: string;
  ProductsPrice: string;
  ProductsImg: string;
}

const Admin = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [editProduct, setEditProduct] = useState<Product | null>(null);
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
      console.log(data);
      setProductList(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch(`${BaseUrl}/add`, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error("Ürün ekleme başarısız");
      const data: Product = await response.json();
      fetchProducts();
      e.currentTarget.reset();
      setShowAddPopup(false);
    } catch (error) {
      console.error(error);
      alert("Bir hata oluştu!");
    }
  };

  const handleUpdateProduct = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!editProduct) return;
    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch(`${BaseUrl}/update/${editProduct.Productsid}`, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error("Ürün güncelleme başarısız");
      const data: Product = await response.json();
      fetchProducts();
      setShowEditPopup(false);
      setEditProduct(null);
    } catch (error) {
      console.error(error);
      alert("Bir hata oluştu!");
    }
  };

  const handleDeleteProduct = async (Productsid: number) => {
    try {
      const response = await fetch(`${BaseUrl}/delete/${Productsid}`, {
        method: "POST",
      });
      if (!response.ok) throw new Error("Ürün silme başarısız");
      const data = await response.json();
      alert(data.message);
      fetchProducts();
    } catch (error) {
      console.error(error);
      alert("Bir hata oluştu!");
    }
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex justify-between items-center py-4 ">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <button
          onClick={() => setShowAddPopup(true)}
          className="bg-green-500 text-white px-4 py-2 rounded mb-6"
        >
          Yeni Ürün Ekle
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productList.map((product) => (
          <div
            key={product.Productsid}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center border hover:shadow-xl transition"
          >
            <img
              src={`${baseImgUrl}${product.ProductsImg}`}
              alt={product.ProductsName}
              className="w-40 h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold">{product.ProductsName}</h2>
            <p className="text-gray-600 font-medium">
              {product.ProductsPrice} TL
            </p>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => {
                  setEditProduct(product);
                  setShowEditPopup(true);
                }}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Düzenle
              </button>
              <button
                onClick={() => handleDeleteProduct(product.Productsid)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>
      {showAddPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Yeni Ürün Ekle
            </h2>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <div className="flex flex-col">
                <label className="text-gray-600 font-medium">Ürün Adı</label>
                <input
                  type="text"
                  name="productsName"
                  placeholder="Ürün Adı"
                  required
                  className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 font-medium">Ürün Fiyatı</label>
                <input
                  type="text"
                  name="productsPrice"
                  placeholder="Ürün Fiyatı"
                  required
                  className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 font-medium">
                  Ürün Görseli
                </label>
                <input
                  type="file"
                  name="image"
                  className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowAddPopup(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Kapat
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Ekle
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showEditPopup && editProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Ürünü Düzenle
            </h2>
            <form
              onSubmit={handleUpdateProduct}
              className="flex flex-col justify-start items-center gap-3 w-full"
            >
              <div className="flex flex-col">
                <label className="text-gray-600 font-medium">Ürün Adı</label>
                <input
                  type="text"
                  name="productsName"
                  defaultValue={editProduct.ProductsName}
                  required
                  className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 font-medium">Ürün Fiyatı</label>
                <input
                  type="text"
                  name="productsPrice"
                  defaultValue={editProduct.ProductsPrice}
                  required
                  className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 font-medium">
                  Yeni Görsel Yükle
                </label>
                <input
                  type="file"
                  name="image"
                  className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowEditPopup(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Kapat
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Güncelle
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;