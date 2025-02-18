import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Admin() {
  const [productList, setProductList] = useState<any[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: null,
  });
  const [editProduct, setEditProduct] = useState<any | null>(null);

  // Ürünleri API'den Çekme
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/products/getAllProduct");
      const data = await response.json();
      setProductList(data);
    } catch (error) {
      console.error(error);
      alert("Ürünler alınırken bir hata oluştu!");
    }
  };

  useEffect(() => {
    fetchProducts(); // Component mount olduğunda ürünleri çek
  }, []);

  const handleDelete = async (productId) => {
    if (!productId) {
      console.error("Invalid product ID");
      alert("Geçersiz ürün ID");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/products/delete/${productId}`, {
        method: 'POST',
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        fetchProducts(); // Refresh the product list after deletion
      } else {
        console.error("Error deleting product");
        alert("Ürün silme hatası!");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Bir hata oluştu!");
    }
  };

  const handleAddProduct = async () => {
    const formData = new FormData();
    formData.append("productsName", newProduct.name);
    formData.append("productsPrice", newProduct.price);
    if (newProduct.image) formData.append("image", newProduct.image);

    try {
      const response = await fetch(
        "http://localhost:5000/products/addProduct",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      if (data.message === "Ürün başarıyla eklendi") {
        alert("Ürün başarıyla eklendi!");
        setProductList([
          ...productList,
          {
            id: Date.now(),
            name: newProduct.name,
            price: newProduct.price,
            image: data.imageUrl,
          },
        ]);
        setShowPopup(false);
        setNewProduct({ name: "", price: "", image: null });
        fetchProducts(); // Yeni eklenen ürünleri almak için yeniden veri çek
      } else {
        alert("Ürün ekleme işlemi başarısız!");
      }
    } catch (error) {
      console.error(error);
      alert("Bir hata oluştu!");
    }
  };

  const handleEditProduct = (product) => {
    setEditProduct(product);
    setShowPopup(true);
  };

  const handleUpdateProduct = async () => {
    const formData = new FormData();
    formData.append("productsName", editProduct.name);
    formData.append("productsPrice", editProduct.price);
    if (editProduct.image) formData.append("image", editProduct.image);

    try {
      const response = await fetch(
        `http://localhost:5000/products/update/${editProduct.productsid}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      if (data.message === "Ürün başarıyla güncellendi") {
        alert("Ürün başarıyla güncellendi!");
        fetchProducts(); // Ürün güncellenince listeyi yenile
        setShowPopup(false);
        setEditProduct(null); // Düzenleme modunu kapat
      } else {
        alert("Ürün güncelleme başarısız!");
      }
    } catch (error) {
      console.error(error);
      alert("Bir hata oluştu!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg p-6">
        {/* Başlık ve Ürün Ekle Butonu */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Ürün Yönetimi</h2>
          <button
            onClick={() => setShowPopup(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
          >
            Ürün Ekle
          </button>
        </div>

        {/* Ürün Tablosu */}
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Ürün Adı</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Fiyat</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Resim</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => (
              <tr key={product.productid} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-800">{product.productsName}</td>
                <td className="py-3 px-4 text-gray-800">{product.productsPrice}₺</td>
                <td className="py-3 px-4">
                  <img
                    src={`http://localhost:5000${product.productsImg}`}
                    alt={product.productsName}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => handleEditProduct(product)}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all mr-2"
                  >
                    <FaEdit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(product.productsid)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                  >
                    <MdDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Ürün Ekleme veya Güncelleme Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {editProduct ? "Ürün Güncelle" : "Yeni Ürün Ekle"}
            </h3>
            <div>
              <label className="block text-sm text-gray-600">Ürün Adı</label>
              <input
                type="text"
                value={editProduct ? editProduct.name : newProduct.name}
                onChange={(e) =>
                  editProduct
                    ? setEditProduct({ ...editProduct, name: e.target.value })
                    : setNewProduct({ ...newProduct, name: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
              />
              <label className="block text-sm text-gray-600">Fiyat</label>
              <input
                type="number"
                value={editProduct ? editProduct.price : newProduct.price}
                onChange={(e) =>
                  editProduct
                    ? setEditProduct({ ...editProduct, price: e.target.value })
                    : setNewProduct({ ...newProduct, price: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
              />
              <label className="block text-sm text-gray-600">Resim</label>
              <input
                type="file"
                onChange={(e) =>
                  editProduct
                    ? setEditProduct({ ...editProduct, image: e.target.files[0] })
                    : setNewProduct({ ...newProduct, image: e.target.files[0] })
                }
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg mr-2"
              >
                Kapat
              </button>
              <button
                onClick={editProduct ? handleUpdateProduct : handleAddProduct}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                {editProduct ? "Güncelle" : "Ürünü Kaydet"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
