import { create } from "zustand";

type SuccessModalStore = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const useSuccessModal = create<SuccessModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

type InputModalStore = {
  isOpen: boolean;
  selectedId: number;
  openModal: (id: number) => void;
  closeModal: () => void;
};

export const useInputModal = create<InputModalStore>((set) => ({
  isOpen: false,
  selectedId: 0,
  openModal: (id) => set({ isOpen: true, selectedId: id }),
  closeModal: () => set({ isOpen: false }),
}));
