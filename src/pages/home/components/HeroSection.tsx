import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold mb-4">Manavımıza Hoşgeldiniz</h1>
      <Link to="/products" className="text-blue-500 hover:underline">
        Ürünleri Gör
      </Link>
    </div>
  );
}
