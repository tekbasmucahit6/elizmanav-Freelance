export default function Footer() {
    return (
        <footer className="bg-orange-600 text-white py-6 px-6 w-full flex flex-col justify-center items-center gap-5">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left w-full">
                {/* Şirket Bilgileri */}
                <div>
                    <h2 className="text-lg font-semibold">Eliz Manav</h2>
                    <p className="text-sm mt-2">Taze ve doğal ürünler ile sağlıklı yaşamın adresi.</p>
                    <p className="text-sm mt-2">Adres: Gülbahar hatun mahallesi Mustafa satan 2.sokak ikbal sitesi no 2/c merkez tokat</p>
                    <p className="text-sm">Telefon: +90 555 123 45 67</p>
                    <p className="text-sm">E-posta: info@elizmanav.com</p>
                </div>

                {/* Hızlı Menü */}
                <div>
                    <h2 className="text-lg font-semibold">Hızlı Menü</h2>
                    <ul className="text-sm mt-2 space-y-1">
                        <li><a href="/" className="hover:underline">Ana Sayfa</a></li>
                        <li><a href="/about" className="hover:underline">Hakkımızda</a></li>
                        <li><a href="/products" className="hover:underline">Ürünler</a></li>
                        <li><a href="/contact" className="hover:underline">İletişim</a></li>
                    </ul>
                </div>

                {/* Sosyal Medya */}
                <div>
                    <h2 className="text-lg font-semibold">Bizi Takip Edin</h2>
                    <div className="flex justify-center md:justify-start space-x-4 mt-2">
                        <a href="#" className="hover:text-gray-200">Facebook</a>
                        <a href="#" className="hover:text-gray-200">Instagram</a>
                        <a href="#" className="hover:text-gray-200">Twitter</a>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-6 text-center border-t border-gray-400 pt-4 w-full">
                <p className="text-sm">&copy; 2025 Eliz Manav. Tüm Hakları Saklıdır.</p>
                <p className="text-sm">Designed by <a href="https://www.mucahittekbas.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-200">Mücahit Tekbaş</a></p>
            </div>
        </footer>
    );
}
