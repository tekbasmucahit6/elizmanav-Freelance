const products = [
  {
    id: 1,
    name: "Elma",
    price: "3.50 TL",
    img: "https://media.istockphoto.com/id/184276818/tr/fotoğraf/red-apple.jpg?s=2048x2048&w=is&k=20&c=v68BXBLrs-11QRX7XIjuDVI_ZOr1hJo-ztf3fYMXW1g=",
  },
  {
    id: 2,
    name: "Muz",
    price: "4.00 TL",
    img: "https://media.istockphoto.com/id/1400057530/tr/fotoğraf/bananas-isolated.jpg?s=2048x2048&w=is&k=20&c=IlMZB6kdy-jHcB7OmPnpRV50i5btIwlRQjXo7sLr_iA=",
  },
  {
    id: 3,
    name: "Portakal",
    price: "2.75 TL",
    img: "https://media.istockphoto.com/id/185284489/tr/fotoğraf/orange.jpg?s=2048x2048&w=is&k=20&c=oXojQZeYZe75hp-eQVAnlM9uCtucpuNkwFFv-moxqCI=",
  },
  {
    id: 4,
    name: "Domates",
    price: "1.50 TL",
    img: "https://media.istockphoto.com/id/1450576005/tr/fotoğraf/tomato-isolated-tomato-on-white-background-perfect-retouched-tomatoe-side-view-with.jpg?s=2048x2048&w=is&k=20&c=WHI_RWDAvSr1ly9FcUW-RzGCIY_88jyU02qf9INkBOA=",
  },
  {
    id: 1,
    name: "Elma",
    price: "3.50 TL",
    img: "https://media.istockphoto.com/id/184276818/tr/fotoğraf/red-apple.jpg?s=2048x2048&w=is&k=20&c=v68BXBLrs-11QRX7XIjuDVI_ZOr1hJo-ztf3fYMXW1g=",
  },
  {
    id: 2,
    name: "Muz",
    price: "4.00 TL",
    img: "https://media.istockphoto.com/id/1400057530/tr/fotoğraf/bananas-isolated.jpg?s=2048x2048&w=is&k=20&c=IlMZB6kdy-jHcB7OmPnpRV50i5btIwlRQjXo7sLr_iA=",
  },
  {
    id: 3,
    name: "Portakal",
    price: "2.75 TL",
    img: "https://media.istockphoto.com/id/185284489/tr/fotoğraf/orange.jpg?s=2048x2048&w=is&k=20&c=oXojQZeYZe75hp-eQVAnlM9uCtucpuNkwFFv-moxqCI=",
  },
  {
    id: 4,
    name: "Domates",
    price: "1.50 TL",
    img: "https://media.istockphoto.com/id/1450576005/tr/fotoğraf/tomato-isolated-tomato-on-white-background-perfect-retouched-tomatoe-side-view-with.jpg?s=2048x2048&w=is&k=20&c=WHI_RWDAvSr1ly9FcUW-RzGCIY_88jyU02qf9INkBOA=",
  },
  {
    id: 1,
    name: "Elma",
    price: "3.50 TL",
    img: "https://media.istockphoto.com/id/184276818/tr/fotoğraf/red-apple.jpg?s=2048x2048&w=is&k=20&c=v68BXBLrs-11QRX7XIjuDVI_ZOr1hJo-ztf3fYMXW1g=",
  },
  {
    id: 2,
    name: "Muz",
    price: "4.00 TL",
    img: "https://media.istockphoto.com/id/1400057530/tr/fotoğraf/bananas-isolated.jpg?s=2048x2048&w=is&k=20&c=IlMZB6kdy-jHcB7OmPnpRV50i5btIwlRQjXo7sLr_iA=",
  },
  {
    id: 3,
    name: "Portakal",
    price: "2.75 TL",
    img: "https://media.istockphoto.com/id/185284489/tr/fotoğraf/orange.jpg?s=2048x2048&w=is&k=20&c=oXojQZeYZe75hp-eQVAnlM9uCtucpuNkwFFv-moxqCI=",
  },
  {
    id: 4,
    name: "Domates",
    price: "1.50 TL",
    img: "https://media.istockphoto.com/id/1450576005/tr/fotoğraf/tomato-isolated-tomato-on-white-background-perfect-retouched-tomatoe-side-view-with.jpg?s=2048x2048&w=is&k=20&c=WHI_RWDAvSr1ly9FcUW-RzGCIY_88jyU02qf9INkBOA=",
  },
  {
    id: 1,
    name: "Elma",
    price: "3.50 TL",
    img: "https://media.istockphoto.com/id/184276818/tr/fotoğraf/red-apple.jpg?s=2048x2048&w=is&k=20&c=v68BXBLrs-11QRX7XIjuDVI_ZOr1hJo-ztf3fYMXW1g=",
  },
  {
    id: 2,
    name: "Muz",
    price: "4.00 TL",
    img: "https://media.istockphoto.com/id/1400057530/tr/fotoğraf/bananas-isolated.jpg?s=2048x2048&w=is&k=20&c=IlMZB6kdy-jHcB7OmPnpRV50i5btIwlRQjXo7sLr_iA=",
  },
  {
    id: 3,
    name: "Portakal",
    price: "2.75 TL",
    img: "https://media.istockphoto.com/id/185284489/tr/fotoğraf/orange.jpg?s=2048x2048&w=is&k=20&c=oXojQZeYZe75hp-eQVAnlM9uCtucpuNkwFFv-moxqCI=",
  },
  {
    id: 4,
    name: "Domates",
    price: "1.50 TL",
    img: "https://media.istockphoto.com/id/1450576005/tr/fotoğraf/tomato-isolated-tomato-on-white-background-perfect-retouched-tomatoe-side-view-with.jpg?s=2048x2048&w=is&k=20&c=WHI_RWDAvSr1ly9FcUW-RzGCIY_88jyU02qf9INkBOA=",
  },
  {
    id: 1,
    name: "Elma",
    price: "3.50 TL",
    img: "https://media.istockphoto.com/id/184276818/tr/fotoğraf/red-apple.jpg?s=2048x2048&w=is&k=20&c=v68BXBLrs-11QRX7XIjuDVI_ZOr1hJo-ztf3fYMXW1g=",
  },
  {
    id: 2,
    name: "Muz",
    price: "4.00 TL",
    img: "https://media.istockphoto.com/id/1400057530/tr/fotoğraf/bananas-isolated.jpg?s=2048x2048&w=is&k=20&c=IlMZB6kdy-jHcB7OmPnpRV50i5btIwlRQjXo7sLr_iA=",
  },
  {
    id: 3,
    name: "Portakal",
    price: "2.75 TL",
    img: "https://media.istockphoto.com/id/185284489/tr/fotoğraf/orange.jpg?s=2048x2048&w=is&k=20&c=oXojQZeYZe75hp-eQVAnlM9uCtucpuNkwFFv-moxqCI=",
  },
  {
    id: 4,
    name: "Domates",
    price: "1.50 TL",
    img: "https://media.istockphoto.com/id/1450576005/tr/fotoğraf/tomato-isolated-tomato-on-white-background-perfect-retouched-tomatoe-side-view-with.jpg?s=2048x2048&w=is&k=20&c=WHI_RWDAvSr1ly9FcUW-RzGCIY_88jyU02qf9INkBOA=",
  },
];

export default function Products() {
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <h1 className="text-4xl font-bold mb-4">Ürünlerimiz</h1>
      <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6 px-2">
        {
          products.map((dt, i) => (
            <div className="flex flex-col justify-start items-center shadow w-full xl:w-56 lg:w-56 md:w-56 border  h-82" key={i}>
              <div className="w-full">
                <img src={dt.img} className="w-full" alt="" />
              </div>
              <div className="flex flex-col justify-end items-center w-full h-full">
                <p>{dt.name}</p>
                <p>{dt.price}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
