import { create } from "zustand"

export const useDataState = create((set) => ({
    products: []
}))

