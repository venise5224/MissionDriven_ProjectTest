import { ModalType } from "@/types/modalType";
import { create } from "zustand";

interface ModalState {
  currentModal: ModalType;
  modalProps?: Record<string, () => void> | null;
  openModal: (modalName: ModalType, props?: Record<string, () => void>) => void;
  closeModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  currentModal: null,
  modalProps: null,

  openModal: (modalName, props) =>
    set({ currentModal: modalName, modalProps: props }),

  closeModal: () => set({ currentModal: null, modalProps: null }),
}));

export default useModalStore;
