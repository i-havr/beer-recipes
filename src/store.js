import { create } from "zustand";
import { removeFromArray } from "./helpers";

export const useRecipes = create((set) => ({
  recipes: [],
  addRecipes: (newRecipes) =>
    set((state) => {
      return { recipes: [...state.recipes, ...newRecipes] };
    }),
  deleteRecipes: (recipesForDeleting) =>
    set((state) => {
      return { recipes: removeFromArray(state.recipes, recipesForDeleting) };
    }),
}));
