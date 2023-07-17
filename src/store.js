import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { removeFromArray } from "./helpers";

export const useRecipes = create(
  persist(
    (set) => ({
      recipes: [],
      addRecipes: (newRecipes) =>
        set((state) => {
          return { recipes: [...state.recipes, ...newRecipes] };
        }),
      refreshRecipes: () =>
        set(() => {
          return { recipes: [] };
        }),
      deleteRecipes: (recipesForDeleting) =>
        set((state) => {
          return {
            recipes: removeFromArray(state.recipes, recipesForDeleting),
          };
        }),
    }),
    { name: "recipes", storage: createJSONStorage(() => localStorage) }
  )
);
