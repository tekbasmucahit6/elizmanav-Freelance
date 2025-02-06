import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin";
import Products from "../pages/home/components/Products";
import Home from "../pages/home/Home";
import NotFound from "../pages/NotFound";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
