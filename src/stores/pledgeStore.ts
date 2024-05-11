import { create } from "zustand";
import pledges from "../data/pledges";

type PledgeItem = {
  id: number;
  title: string;
  amount: number;
  detail: string;
  lefts: number;
};

type PledgeStore = {
  pledges: PledgeItem[];
  claimReward: (id: number) => void;
};

export const usePledgeStore = create<PledgeStore>((set) => ({
  pledges: pledges,
  claimReward: (id: number) =>
    set((state) => {
      const newPledges = state.pledges.map((pledge) =>
        pledge.id === id && pledge.lefts > 0
          ? { ...pledge, lefts: pledge.lefts - 1 }
          : pledge,
      );
      return { pledges: newPledges };
    }),
}));
