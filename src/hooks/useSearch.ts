import { create } from "zustand";

interface ProductStore {
  search: string;
  setSearch: (search: string) => void;
}

export const useSearch = create<ProductStore>((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
}));
