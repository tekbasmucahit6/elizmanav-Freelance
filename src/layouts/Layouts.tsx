import Navbar from "../components/Navbar";
import AllRoutes from "../routes/AllRoutes";

export default function Layouts() {
  return (
    <div className="min-w-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <div>
        <AllRoutes />
      </div>
    </div>
  );
}
