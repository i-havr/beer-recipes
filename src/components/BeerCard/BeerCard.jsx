import PropTypes from "prop-types";
import { endStringWithThreeDots } from "../../helpers";
import * as SC from "./BeerCard.styled";

export const BeerCard = ({ beer, onSelectRecipe, selectedRecipes }) => {
  if (beer) {
    const { id, name, tagline, description, image_url, abv } = beer;

    const isSelected = selectedRecipes.includes(id);
    const selectedStyle = {
      background:
        "linear-gradient(114.99deg, #e7500a -0.99%, #5736a3 54.28%, #4b2a99 78.99%)",
    };

    return (
      <SC.BeerCard>
        <SC.LinkStyled to={`${id}`}>
          <SC.ContentCardWrapper
            onContextMenu={(event) => onSelectRecipe(event, id)}
            style={isSelected ? selectedStyle : null}
          >
            <SC.TextWrapper>
              <SC.Name>{name}</SC.Name>
              <SC.Tagline>{tagline}</SC.Tagline>
              <SC.Line />
              <SC.Description title="Click to get more info">
                {description.length > 130
                  ? endStringWithThreeDots(description)
                  : description}
              </SC.Description>
            </SC.TextWrapper>
            <SC.ImageWrapper>
              <SC.AlcoholContent>
                ABV
                <br />
                {abv}%
              </SC.AlcoholContent>
              <SC.Image
                src={image_url}
                alt={name}
                title={name}
                style={isSelected ? { scale: "1.5", rotate: "6deg" } : null}
              />
            </SC.ImageWrapper>
          </SC.ContentCardWrapper>
        </SC.LinkStyled>
      </SC.BeerCard>
    );
  }
};

BeerCard.propTypes = {
  beer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    first_brewed: PropTypes.string.isRequired,
    brewers_tips: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string,
    abv: PropTypes.number.isRequired,
    food_pairing: PropTypes.arrayOf(PropTypes.string).isRequired,
    volume: PropTypes.shape({
      unit: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }).isRequired,
  }),
  onSelectRecipe: PropTypes.func.isRequired,
  selectedRecipes: PropTypes.arrayOf(PropTypes.number).isRequired,
};
