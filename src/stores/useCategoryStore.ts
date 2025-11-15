import { create } from "zustand";

interface CategoryState {
  categories: string[];
  toggleCategory: (value: string) => void;
  clearCategories: () => void;
}

const useCategoryStore = create<CategoryState>((set, get) => ({
  categories: [],

  toggleCategory: (value: string) => {
    const current = get().categories;

    if (current.includes(value)) {
      set({ categories: current.filter((category) => category !== value) });
      return;
    }

    if (current.length >= 2) return;

    set({ categories: [...current, value] });
  },

  clearCategories: () => set({ categories: [] }),
}));

export default useCategoryStore;
