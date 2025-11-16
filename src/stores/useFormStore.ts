import { create } from "zustand";

interface FormStore {
  isValid: boolean;
  setIsValid: (value: boolean) => void;
}

export const useFormStore = create<FormStore>((set) => ({
  isValid: false,
  setIsValid: (value) => set({ isValid: value }),
}));
