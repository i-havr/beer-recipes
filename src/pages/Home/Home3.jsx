import { useState, useEffect } from "react";
import { BeersList } from "../../components/BeersList/BeersList2";
import { Button } from "../../components/Button";
import { getBeers } from "../../services/BeerApi";
import { useRecipes } from "../../store";

import * as SC from "./Home.styled";

export default function Home() {
  const [page, setPage] = useState(1);
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const [activeBlockIndex, setActiveBlockIndex] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const recipes = useRecipes((state) => state.recipes);
  const addRecipes = useRecipes((state) => state.addRecipes);
  const refreshRecipes = useRecipes((state) => state.refreshRecipes);
  const deleteRecipes = useRecipes((state) => state.deleteRecipes);

  useEffect(() => {
    if (isFirstRender) {
      console.log("first");
      setIsFirstRender(false);
      return;
    }

    console.log("object");
    const getBeersList = async () => {
      try {
        const data = await getBeers(page);
        addRecipes(data);
        setPage((prev) => prev + 1);
      } catch (error) {
        console.log("Whoops, something went wrong ", error.message);
      }
    };

    recipes.length < 15 && getBeersList();
  }, [addRecipes, isFirstRender, page, recipes.length]);

  const isSelected = (id) => selectedRecipes.includes(id);

  const toggleSelecting = (event, id) => {
    event.preventDefault();

    isSelected(id)
      ? setSelectedRecipes((prev) => prev.filter((el) => el !== id))
      : setSelectedRecipes((prev) => [...prev, id]);
  };

  const refreshRecipesList = () => {
    refreshRecipes();
    setSelectedRecipes([]);
    setPage(1);
  };

  const handleDeleteSelected = () => {
    deleteRecipes(selectedRecipes);
    setSelectedRecipes([]);
  };

  console.log(recipes, page);

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
          beers={recipes.slice(0, 15)}
          activeBlockIndex={activeBlockIndex}
          onSelectRecipe={toggleSelecting}
          selectedRecipes={selectedRecipes}
        />
      </SC.Container>
    </SC.Home>
  ) : null;
}
