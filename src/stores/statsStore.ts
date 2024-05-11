import { create } from "zustand";

type Stats = {
  backed: number;
  backers: number;
};

type StatsStore = {
  stats: Stats;
  updateStats: (amount: number) => void;
};

export const useStats = create<StatsStore>((set) => ({
  stats: {
    backed: 89914,
    backers: 5007,
  },
  updateStats: (amount: number) =>
    set((state) => {
      return {
        stats: {
          backed: state.stats.backed + amount,
          backers: state.stats.backers + 1,
        },
      };
    }),
}));
