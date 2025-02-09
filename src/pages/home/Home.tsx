import HeroSection from "./components/HeroSection";
import Products from "./components/Products";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full pb-5">
      <div className="template flex flex-col gap-16 w-full pt-5">
        <HeroSection />
        <Products />
      </div>
    </div>
  );
}
