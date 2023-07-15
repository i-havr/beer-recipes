import PropTypes from "prop-types";
import { BeerCard } from "../BeerCard";

import * as SC from "./BeersList.styled";

export const BeersList = ({ beers, onSelectRecipe, selectedRecipes }) => {
  if (beers) {
    return (
      <>
        <SC.BeersList>
          {beers.map((beer) => (
            <BeerCard
              key={beer.id}
              beer={beer}
              onSelectRecipe={onSelectRecipe}
              selectedRecipes={selectedRecipes}
            />
          ))}
        </SC.BeersList>
        <SC.BeersList>
          {beers.map((beer) => (
            <BeerCard
              key={beer.id}
              beer={beer}
              onSelectRecipe={onSelectRecipe}
              selectedRecipes={selectedRecipes}
            />
          ))}
        </SC.BeersList>
        <SC.BeersList>
          {beers.map((beer) => (
            <BeerCard
              key={beer.id}
              beer={beer}
              onSelectRecipe={onSelectRecipe}
              selectedRecipes={selectedRecipes}
            />
          ))}
        </SC.BeersList>
      </>
    );
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
