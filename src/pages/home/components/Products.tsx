const products = [
  {
    id: 1,
    name: "Elma",
    price: "₺20/kg",
    image:
      "https://media.istockphoto.com/id/184276818/tr/fotoğraf/red-apple.jpg?s=2048x2048&w=is&k=20&c=v68BXBLrs-11QRX7XIjuDVI_ZOr1hJo-ztf3fYMXW1g=",
  },
  {
    id: 2,
    name: "Muz",
    price: "₺30/kg",
    image:
      "https://media.istockphoto.com/id/1400057530/tr/fotoğraf/bananas-isolated.jpg?s=2048x2048&w=is&k=20&c=IlMZB6kdy-jHcB7OmPnpRV50i5btIwlRQjXo7sLr_iA=",
  },
  {
    id: 3,
    name: "Portakal",
    price: "₺25/kg",
    image:
      "https://media.istockphoto.com/id/185284489/tr/fotoğraf/orange.jpg?s=2048x2048&w=is&k=20&c=oXojQZeYZe75hp-eQVAnlM9uCtucpuNkwFFv-moxqCI=",
  },
  {
    id: 4,
    name: "Çilek",
    price: "₺50/kg",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 1,
    name: "Elma",
    price: "₺20/kg",
    image:
      "https://media.istockphoto.com/id/184276818/tr/fotoğraf/red-apple.jpg?s=2048x2048&w=is&k=20&c=v68BXBLrs-11QRX7XIjuDVI_ZOr1hJo-ztf3fYMXW1g=",
  },
  {
    id: 2,
    name: "Muz",
    price: "₺30/kg",
    image:
      "https://media.istockphoto.com/id/1400057530/tr/fotoğraf/bananas-isolated.jpg?s=2048x2048&w=is&k=20&c=IlMZB6kdy-jHcB7OmPnpRV50i5btIwlRQjXo7sLr_iA=",
  },
  {
    id: 3,
    name: "Portakal",
    price: "₺25/kg",
    image:
      "https://media.istockphoto.com/id/185284489/tr/fotoğraf/orange.jpg?s=2048x2048&w=is&k=20&c=oXojQZeYZe75hp-eQVAnlM9uCtucpuNkwFFv-moxqCI=",
  },
  {
    id: 4,
    name: "Çilek",
    price: "₺50/kg",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 1,
    name: "Elma",
    price: "₺20/kg",
    image:
      "https://media.istockphoto.com/id/184276818/tr/fotoğraf/red-apple.jpg?s=2048x2048&w=is&k=20&c=v68BXBLrs-11QRX7XIjuDVI_ZOr1hJo-ztf3fYMXW1g=",
  },
  {
    id: 2,
    name: "Muz",
    price: "₺30/kg",
    image:
      "https://media.istockphoto.com/id/1400057530/tr/fotoğraf/bananas-isolated.jpg?s=2048x2048&w=is&k=20&c=IlMZB6kdy-jHcB7OmPnpRV50i5btIwlRQjXo7sLr_iA=",
  },
  {
    id: 3,
    name: "Portakal",
    price: "₺25/kg",
    image:
      "https://media.istockphoto.com/id/185284489/tr/fotoğraf/orange.jpg?s=2048x2048&w=is&k=20&c=oXojQZeYZe75hp-eQVAnlM9uCtucpuNkwFFv-moxqCI=",
  },
  {
    id: 4,
    name: "Çilek",
    price: "₺50/kg",
    image: "https://via.placeholder.com/150",
  },

];
export default function Products() {
  return (
    <div className="p-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-lg hover:scale-105 transition-all flex flex-col relative"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full object-contain rounded-t-2xl pt-3"
          />
          <div className="p-4 text-center flex flex-col justify-end h-full">
            <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
            <p className="text-gray-600 font-medium mt-2">{product.price}</p>
          </div>
          <div className="absolute top-1 right-2">
            <p className="bg-green-700 hover:bg-green-700 text-white py-2 px-2 rounded text-xs">
              %100 doğal
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

