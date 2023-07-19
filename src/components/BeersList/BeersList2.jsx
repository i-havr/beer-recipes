import PropTypes from "prop-types";
import { BeerCard } from "../BeerCard";

import * as SC from "./BeersList.styled2";

export const BeersList = ({
  beers,
  onSelectRecipe,
  selectedRecipes,
  activeBlockIndex,
}) => {
  const renderBlocks = () => {
    const blocks = beers.reduce((acc, item, index) => {
      if (index % 5 === 0) {
        acc.push([]);
      }
      acc[acc.length - 1].push(item);
      return acc;
    }, []);

    return blocks.map((block, blockIndex) => (
      <SC.Block
        id={blockIndex}
        key={block[0].name + block[1].name}
        style={
          +activeBlockIndex === blockIndex
            ? { opacity: 1, transform: "translateY(0px)" }
            : null
        }
        className="block"
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
    return <SC.BeersList className="beerList">{renderBlocks()}</SC.BeersList>;
  }
};

BeersList.propTypes = {
  beers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      tagline: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image_url: PropTypes.string,
      abv: PropTypes.number.isRequired,
      volume: PropTypes.shape({
        unit: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      }).isRequired,
    })
  ),
  activeBlockIndex: PropTypes.number.isRequired,
  onSelectRecipe: PropTypes.func.isRequired,
  selectedRecipes: PropTypes.arrayOf(PropTypes.number).isRequired,
};
