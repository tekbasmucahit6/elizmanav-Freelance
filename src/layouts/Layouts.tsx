import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar";
import AllRoutes from "../routes/AllRoutes";

export default function Layouts() {
  return (
    <div className="flex flex-col justify-between  h-screen">
      <div>
        <Contact />
        <Navbar />
      </div>
      <div>
        <AllRoutes />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
