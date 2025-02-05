import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
export default function Contact() {
  return (
    <div className="bg-orange-600 flex justify-center items-center py-1 px-3">
      <div className="template w-full flex justify-between items-center">
        <div>
          <a href="">
            <p className="text-white text-sm flex justify-center items-end gap-2">
              <FaPhoneAlt size={20} color="yellow" /> telefon et
            </p>
          </a>
              </div>
              
              <div className="text-white hidden xl:flex lg:flex md:flex font-bold">
                <p>En Doğalından</p>    
              </div>


        <div>
          <a href="">
            <p className="text-white text-sm flex justify-center items-end gap-2">
              <FaWhatsapp size={20} color="lightgreen" /> mesaj at
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
