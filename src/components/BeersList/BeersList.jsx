import PropTypes from "prop-types";
import { useState, useEffect, useCallback } from "react";
import { BeerCard } from "../BeerCard";
import { useRecipes } from "../../store";

import * as SC from "./BeersList.styled";

export const BeersList = ({ beers, onSelectRecipe, selectedRecipes }) => {
  const [activeBlockIndex, setActiveBlockIndex] = useState(0);
  const [iteration, setIteration] = useState(1);
  const [removedBlocks, setRemovedBlocks] = useState([]);

  const recipes = useRecipes((state) => state.recipes);
  const deleteRecipes = useRecipes((state) => state.deleteRecipes);

  useEffect(() => {
    const cardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // if (entry.isIntersecting) {
          //   setActiveBlockIndex(entry.target.id);
          //   setIteration(+entry.target.id + 1);
          // }
          const visibleIndex = Math.floor(
            entry.intersectionRatio * beers.length
          );
          setActiveBlockIndex(visibleIndex);
          setIteration(+entry.target.id + 1);
        });
      },
      { root: null, rootMargin: "-100px", threshold: 0.6 }
    );

    document
      .querySelectorAll(".block")
      .forEach((block) => cardsObserver.observe(block));

    return () => cardsObserver.disconnect();
  }, [beers.length]);

  const handleRemoveFirstBlock = useCallback(() => {
    const [firstBlock, ...restBlocks] = removedBlocks;
    setRemovedBlocks([...restBlocks, firstBlock]);
  }, [removedBlocks]);

  useEffect(() => {
    console.log(recipes);

    if (iteration === 3) {
      setIteration(1);
      deleteRecipes(recipes.slice(0, 5).map((recipe) => recipe.id));
      handleRemoveFirstBlock();
    }
  }, [deleteRecipes, handleRemoveFirstBlock, iteration, recipes]);

  const renderBlocks = () => {
    const blocks = beers?.reduce((acc, item, index) => {
      if (index % 5 === 0) {
        acc.push([]);
      }
      acc[acc.length - 1].push(item);
      return acc;
    }, []);

    return blocks.map((block, blockIndex) => (
      <SC.Block
        id={blockIndex}
        style={
          activeBlockIndex == blockIndex
            ? { opacity: 1, transform: "translateY(0px)" }
            : null
        }
        className="block"
        key={blockIndex}
      >
        {block.map((beer) => (
          <BeerCard
            key={beer.id}
            beer={beer}
            onSelectRecipe={onSelectRecipe}
            selectedRecipes={selectedRecipes}
          ></BeerCard>
        ))}
      </SC.Block>
    ));
  };

  if (beers) {
    return <SC.BeersList>{renderBlocks()}</SC.BeersList>;
  }
};

BeersList.propTypes = {
  beers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      tagline: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
      abv: PropTypes.number.isRequired,
      volume: PropTypes.shape({
        unit: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      }).isRequired,
    })
  ),
  onSelectRecipe: PropTypes.func.isRequired,
  selectedRecipes: PropTypes.arrayOf(PropTypes.number).isRequired,
};
