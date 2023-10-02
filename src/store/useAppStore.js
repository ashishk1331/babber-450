import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAppStore = create(
    persist(
        (set) => ({
            // topic related
            topic: "Array",
            changeTopic: (topic) => set((state) => ({ topic })),

            // task related
            done: [],
            addDone: (id) => set((state) => ({ done: [id, ...state.done] })),
            removeDone: (id) =>
                set((state) => ({ done: state.done.filter((i) => i !== id) })),
        }),
        {
            name: "babber-450-storage",
            partialize: (state) => ({ done: state.done, topic: state.topic }),
        },
    ),
);
