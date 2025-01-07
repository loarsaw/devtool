import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { zustandStore } from "./middleware";

export const useUserStore = create()(
  persist(
    (set, _get) => ({
      username: "",
      setUserName: (src: string) => set({ userName: src }),
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => zustandStore),
    }
  )
);
