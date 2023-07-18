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

  const getBeersList = useCallback(
    async (page) => {
      try {
        const data = await getBeers(page);
        addRecipes(data);
        setPage((prev) => prev + 1);

        return data;
      } catch (error) {
        console.log("Whoops, something went wrong ", error.message);
        return;
      }
    },
    [addRecipes]
  );

  const handleDelete = useCallback(
    (event = null) => {
      if (event) {
        deleteRecipes(selectedRecipes);
        setSelectedRecipes([]);
      } else {
        console.log(recipes.slice(0, 5).map((recipe) => recipe.id));
        deleteRecipes(recipes.slice(0, 5).map((recipe) => recipe.id));
      }
    },
    [deleteRecipes, recipes, selectedRecipes]
  );

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    // console.log("iteration", iteration);

    const cardsObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveBlockIndex(+entry.target.id);
            setIteration(+entry.target.id + 1);

            console.log("iteration", iteration);

            if (iteration === 3) {
              observer.unobserve(entry.target);
              setRenderedRecipes(recipes.slice(5, 20));
              // setRenderedRecipes((prev) => [...prev, ...recipes.slice(15, 20)]);
              // deleteRecipes(recipes.slice(0, 5).map((recipe) => recipe.id));
              // deleteRecipes([1, 2, 3, 4, 5]);
              // setIteration(1);
              // handleDelete();
            }
          }
        });
      },
      { root: null, rootMargin: "-100px", threshold: 0.5 }
    );

    document
      .querySelectorAll(".block")
      .forEach((block) => cardsObserver.observe(block));

    recipes.length < 15 && getBeersList(page);

    return () => cardsObserver.disconnect();
  }, [deleteRecipes, getBeersList, isFirstRender, iteration, page, recipes]);

  const isSelected = (id) => selectedRecipes.includes(id);

  const toggleSelecting = (event, id) => {
    event.preventDefault();

    isSelected(id)
      ? setSelectedRecipes((prev) => prev.filter((el) => el !== id))
      : setSelectedRecipes((prev) => [...prev, id]);
  };

  // console.log(recipes);

  const refreshRecipesList = () => {
    refreshRecipes();
    setSelectedRecipes([]);
    setPage(1);
  };

  return recipes.length ? (
    <SC.Home>
      <Button type="refresh" actionHandler={() => refreshRecipesList()}>
        Refresh the list
      </Button>
      {selectedRecipes.length ? (
        <Button actionHandler={handleDelete}>Delete selected</Button>
      ) : null}

      <SC.Container>
        <h2>LEFT click to open, RIGHT click to select, SCROLL to get more</h2>
        <BeersList
          // beers={recipes.slice(0, 15)}
          beers={renderedRecipes.slice(-15)}
          activeBlockIndex={activeBlockIndex}
          onSelectRecipe={toggleSelecting}
          selectedRecipes={selectedRecipes}
        />
      </SC.Container>
    </SC.Home>
  ) : null;
}
