import { Link } from "react-router-dom";
import Products from "./Products";

export default function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Manavımıza Hoşgeldiniz</h1>
      <Link to="/products" className="text-blue-500 hover:underline">
        Ürünleri Gör
      </Link>
      <Products />
    </div>
  );
}
