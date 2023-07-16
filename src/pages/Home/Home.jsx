import { useState, useEffect, useCallback } from "react";
import { BeersList } from "../../components/BeersList";
import { Button } from "../../components/Button";
import { getBeers } from "../../services/BeerApi";
import { useRecipes } from "../../store";
import * as SC from "./Home.styled";

export default function Home() {
  const [page, setPage] = useState(1);
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [iteration, setIteration] = useState(1);

  const recipes = useRecipes((state) => state.recipes);
  const addRecipes = useRecipes((state) => state.addRecipes);
  const deleteRecipes = useRecipes((state) => state.deleteRecipes);

  const cardsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("hello");
      }
    });
  }, {});

  document
    .querySelectorAll(".block")
    .forEach((block) => cardsObserver.observe(block));

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

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    if (iteration > 3) {
      deleteRecipes(recipes.slice(0, 5).map((recipe) => recipe.id));
      setIteration(1);
    }

    recipes.length < 15 && getBeersList(page);
  }, [
    deleteRecipes,
    getBeersList,
    isFirstRender,
    iteration,
    page,
    recipes,
    recipes.length,
  ]);

  const handleDeleteSelectedRecipes = () => {
    deleteRecipes(selectedRecipes);
    setSelectedRecipes([]);
  };

  const isSelected = (id) => selectedRecipes.includes(id);

  const toggleSelecting = (event, id) => {
    event.preventDefault();

    const recipe = recipes.find((recipe) => recipe.id === id);
    const select = (id) => {
      setSelectedRecipes((prev) => [...prev, id]);
    };

    isSelected(id)
      ? setSelectedRecipes((prev) => prev.filter((el) => el !== id))
      : setSelectedRecipes((prev) => [...prev, id]);
  };

  const renderRecipes = (recipes) => {
    return recipes.slice(0, 15);
  };

  const renderedRecipes = renderRecipes(recipes);

  const showRecipes = (renderedRecipes, scrollIteration) => {
    const start = scrollIteration * 5 - 5;
    const end = scrollIteration * 5;
    if (scrollIteration === 2) {
      console.log("hello");
    }
    const shownRecipes = renderedRecipes.slice(start, end);
    return shownRecipes;
  };

  // console.log(page, recipes);

  return renderedRecipes.length ? (
    <SC.Home>
      {selectedRecipes.length ? (
        <Button actionHandler={handleDeleteSelectedRecipes}>
          Delete <br /> selected
        </Button>
      ) : null}

      <SC.Container>
        <h2>LEFT click to open, RIGHT click to select, SCROLL to get more</h2>
        <BeersList
          beers={renderedRecipes.slice(0, 15)}
          // beers={showRecipes(renderedRecipes, iteration)}
          onSelectRecipe={toggleSelecting}
          selectedRecipes={selectedRecipes}
        />
      </SC.Container>
    </SC.Home>
  ) : null;
}
