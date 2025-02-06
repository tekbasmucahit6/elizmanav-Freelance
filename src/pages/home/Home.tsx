import HeroSection from "./components/HeroSection";
import Products from "./components/Products";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="template">
        <HeroSection />
        <Products />
      </div>
    </div>
  );
}
