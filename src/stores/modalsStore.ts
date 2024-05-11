import { create } from "zustand";

type ModalStore = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const useSuccessModal = create<ModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

export const useInputModal = create<ModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
