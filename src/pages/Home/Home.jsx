import { useState, useEffect, useCallback } from "react";
import { BeersList } from "../../components/BeersList/BeersList2";
import { Button } from "../../components/Button";
import { getBeers } from "../../services/BeerApi";
import { useRecipes } from "../../store";

import * as SC from "./Home.styled";

export default function Home() {
  const recipes = useRecipes((state) => state.recipes);

  const [page, setPage] = useState(1);
  const [renderedRecipes, setRenderedRecipes] = useState(recipes.slice(0, 15));
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const [iteration, setIteration] = useState(1);
  const [activeBlockIndex, setActiveBlockIndex] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const addRecipes = useRecipes((state) => state.addRecipes);
  const refreshRecipes = useRecipes((state) => state.refreshRecipes);
  const deleteRecipes = useRecipes((state) => state.deleteRecipes);

  // const getBeersList = useCallback(
  //   async (page) => {
  //     try {
  //       const data = await getBeers(page);
  //       addRecipes(data);
  //       setPage((prev) => prev + 1);

  //       return data;
  //     } catch (error) {
  //       console.log("Whoops, something went wrong ", error.message);
  //       return;
  //     }
  //   },
  //   [addRecipes]
  // );

  const getBeersList = useCallback(async (page) => {
    try {
      const data = await getBeers(page);
      // addRecipes(data);
      setPage((prev) => prev + 1);

      return;
    } catch (error) {
      console.log("Whoops, something went wrong ", error.message);
      return;
    }
  }, []);

  const del = useCallback(() => {
    if (iteration === 3) {
      // setIteration(1);
      deleteRecipes(recipes.slice(0, 5).map((recipe) => recipe.id));
      console.log("recipes", recipes);
      setRenderedRecipes(recipes.slice(0, 15));
      // return;
    }
  }, [deleteRecipes, iteration, recipes]);

  useEffect(() => {
    const cardsObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveBlockIndex(+entry.target.id);
            setIteration(+entry.target.id + 1);

            console.log("iteration", iteration);
            del();
            // if (iteration === 3) {
            // observer.disconnect();
            // deleteRecipes(recipes.slice(0, 5).map((recipe) => recipe.id));
            // console.log("recipes", recipes);
            // setRenderedRecipes(recipes.slice(0, 15));
            // setIteration(1);
            // console.log("page", page);
            // entries[0].target.style.display = "none";
            // observer.unobserve(entry.target);
            // observer.unobserve(entries[1].target);
            // setRenderedRecipes(recipes.slice(5, 20));
            // setRenderedRecipes((prev) => [...prev, ...recipes.slice(15, 20)]);
            // }
          }
        });
      },
      { root: null, rootMargin: "-100px", threshold: 0.5 }
    );

    document
      .querySelectorAll(".block")
      .forEach((block) => cardsObserver.observe(block));

    return () => cardsObserver.disconnect();
  }, [del, deleteRecipes, iteration, recipes]);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    recipes.length < 15 && getBeersList(page);
  }, [getBeersList, isFirstRender, page, recipes.length]);

  const isSelected = (id) => selectedRecipes.includes(id);

  const toggleSelecting = (event, id) => {
    event.preventDefault();

    isSelected(id)
      ? setSelectedRecipes((prev) => prev.filter((el) => el !== id))
      : setSelectedRecipes((prev) => [...prev, id]);
  };

  // console.log(page);

  const refreshRecipesList = () => {
    refreshRecipes();
    setSelectedRecipes([]);
    setPage(1);
  };

  const handleDeleteSelected = () => {
    deleteRecipes(selectedRecipes);
    setSelectedRecipes([]);
  };

  return recipes.length ? (
    <SC.Home>
      <Button type="refresh" actionHandler={() => refreshRecipesList()}>
        Refresh the list
      </Button>
      {selectedRecipes.length ? (
        <Button actionHandler={handleDeleteSelected}>Delete selected</Button>
      ) : null}

      <SC.Container>
        <h2>LEFT click to open, RIGHT click to select, SCROLL to get more</h2>
        <BeersList
          // beers={recipes.slice(0, 15)}
          // beers={renderedRecipes.slice(0, 15)}
          beers={renderedRecipes}
          activeBlockIndex={activeBlockIndex}
          onSelectRecipe={toggleSelecting}
          selectedRecipes={selectedRecipes}
        />
      </SC.Container>
    </SC.Home>
  ) : null;
}
