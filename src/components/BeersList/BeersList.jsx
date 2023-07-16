import PropTypes from "prop-types";
import { BeerCard } from "../BeerCard";

import * as SC from "./BeersList.styled";

export const BeersList = ({ beers, onSelectRecipe, selectedRecipes }) => {
  // console.log(beers);
  const renderBlocks = () => {
    const blocks = beers.reduce((acc, item, index) => {
      if (index % 5 === 0) {
        acc.push([]);
      }
      acc[acc.length - 1].push(item);
      // console.log(acc);
      return acc;
    }, []);

    return blocks.map((block, blockIndex) => (
      <SC.Block className="block" key={blockIndex}>
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
