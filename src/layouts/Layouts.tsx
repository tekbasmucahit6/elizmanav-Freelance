import Contact from "../components/contact/Contact";
import Navbar from "../components/Navbar";
import AllRoutes from "../routes/AllRoutes";

export default function Layouts() {
  return (
    <div className="min-w-screen flex flex-col ">
      <div>
        <Contact />
        <Navbar />
      </div>
      <div>
        <AllRoutes />
      </div>
    </div>
  );
}
