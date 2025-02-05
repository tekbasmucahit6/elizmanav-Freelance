const products = [
  { id: 1, name: "Elma", price: "3.50 TL" },
  { id: 2, name: "Muz", price: "4.00 TL" },
  { id: 3, name: "Portakal", price: "2.75 TL" },
  { id: 4, name: "Domates", price: "1.50 TL" },
];

export default function Products() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Ürünlerimiz</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-green-600 font-bold mt-2">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
