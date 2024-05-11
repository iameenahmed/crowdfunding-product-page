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
  selectedOption: string;
  openModal: (title: string) => void;
  closeModal: () => void;
  updateSelectedOption: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const useInputModal = create<InputModalStore>((set) => ({
  isOpen: false,
  selectedOption: "",
  openModal: (title) => set({ isOpen: true, selectedOption: title }),
  closeModal: () => set({ isOpen: false }),
  updateSelectedOption: (e: React.ChangeEvent<HTMLInputElement>) => {
    set((state) => ({
      selectedOption: !(state.selectedOption === e.currentTarget.name)
        ? e.currentTarget.name
        : "",
    }));
  },
}));
