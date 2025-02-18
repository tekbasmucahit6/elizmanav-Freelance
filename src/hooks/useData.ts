import create from 'zustand';

const useProductStore = create((set) => ({
  products: [], // Ürünlerin tutulacağı state
  loading: false, // Yükleme durumu
  error: null, // Hata mesajı

  // Ürünleri API'den çek ve store'a kaydet
  fetchProducts: async () => {
    set({ loading: true, error: null }); // Yükleme başladı
    try {
      const response = await fetch('http://localhost:5000/api/products'); // API'ye istek at
      if (!response.ok) throw new Error('Ürünler çekilemedi'); // Hata kontrolü
      const data = await response.json(); // JSON'a çevir
      set({ products: data, loading: false }); // Store'u güncelle
    } catch (error) {
      set({ error: error.message, loading: false }); // Hata durumunda store'u güncelle
    }
  },
}));

export default useProductStore;