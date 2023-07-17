import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { BeerCard } from "../BeerCard";

import * as SC from "./BeersList.styled";

export const BeersList = ({ beers, onSelectRecipe, selectedRecipes }) => {
  const [activeBlockIndex, setActiveBlockIndex] = useState(0);

  useEffect(() => {
    const cardsObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveBlockIndex(entry.target.id);

            // observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.7 }
    );

    document
      .querySelectorAll(".block")
      .forEach((block) => cardsObserver.observe(block));

    return () => cardsObserver.disconnect();
  }, []);

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
