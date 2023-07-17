import { Outlet, useParams, useLocation } from "react-router-dom";
import { useRecipes } from "../../store";

import * as SC from "./BeerRecipe.styled";

export default function BeerRecipe() {
  const { beerId } = useParams();
  const recipes = useRecipes((state) => state.recipes);

  const recipe = recipes.find((recipe) => recipe.id === +beerId);

  const {
    name,
    tagline,
    description,
    image_url,
    abv,
    brewers_tips,
    first_brewed,
    food_pairing,
    volume,
    ingredients,
    method,
  } = recipe;

  const { hops, malt, yeast } = ingredients;
  const {
    fermentation: { temp: f_temp },
    mash_temp,
  } = method;

  return (
    <SC.BeerRecipe>
      <SC.Container>
        <SC.Title>{name}</SC.Title>
        <SC.Tagline>{tagline}</SC.Tagline>
        <SC.Line />
        <SC.Description>{description}</SC.Description>
        <SC.Line />
        <SC.ImageContainer>
          <SC.InfoContainer>
            <SC.TextProperty>ALCOHOL BY VOLUME</SC.TextProperty>
            <SC.TextValue style={{ marginBottom: 48 }}>{abv}%</SC.TextValue>
            <SC.TextProperty>FIRST BREWED</SC.TextProperty>
            <SC.TextValue style={{ marginBottom: 48 }}>
              {first_brewed}
            </SC.TextValue>
            <SC.TextProperty>PRODUCTION VOLUME</SC.TextProperty>
            <SC.TextValue style={{ marginBottom: 48 }}>
              {volume.value} {volume.unit}
            </SC.TextValue>
          </SC.InfoContainer>
          <SC.FoodPairingWrapper>
            <SC.TextProperty
              style={{ color: "rgba(255, 255, 255, 0.87)", fontSize: 36 }}
            >
              GOES PERFECTLY WITH:
            </SC.TextProperty>
            <br />
            <SC.FoodPairing>
              {food_pairing.map((item) => (
                <li key={item}>
                  - {item}
                  <br />
                  <br />
                </li>
              ))}
            </SC.FoodPairing>
          </SC.FoodPairingWrapper>
          <SC.ImageWrapper>
            <SC.BeerImage src={image_url} />
          </SC.ImageWrapper>
        </SC.ImageContainer>
        <SC.Line />
        <SC.TitleSection
          style={{
            marginTop: 48,
            marginBottom: 0,
          }}
        >
          Brewers tips:
        </SC.TitleSection>
        <SC.BrewersTips>{brewers_tips}</SC.BrewersTips>
        <SC.Line />

        <SC.InfoContainer style={{ marginTop: 48 }}>
          <SC.TitleSection>Ingredients:</SC.TitleSection>
          <SC.TextProperty>Hops</SC.TextProperty>
          <SC.TextIngredientsValue>
            {hops.map(
              ({ add, amount, attribute, name: ingredientsName }, index) => (
                <li key={index}>
                  - for {add.toUpperCase()}: {amount.value}&nbsp;
                  {amount.unit} of&nbsp;
                  {ingredientsName} (for {attribute})
                  <br />
                </li>
              )
            )}
          </SC.TextIngredientsValue>
          <SC.TextProperty>Malt</SC.TextProperty>
          <SC.TextIngredientsValue>
            {malt.map(({ name: maltName, amount }, index) => (
              <li key={index}>
                - {amount.value}&nbsp;
                {amount.unit} of &nbsp;
                {maltName}
                <br />
              </li>
            ))}
          </SC.TextIngredientsValue>
          <SC.TextProperty>Yeast</SC.TextProperty>
          <SC.TextIngredientsValue>{yeast}</SC.TextIngredientsValue>
        </SC.InfoContainer>
        <SC.Line
          style={{
            marginBottom: 48,
          }}
        />
        <SC.TitleSection>Production method:</SC.TitleSection>
        <SC.InfoContainer
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <SC.FermentationWrapper>
            <SC.TextProperty>Fermentation temperature</SC.TextProperty>
            <SC.TextIngredientsValue>
              {f_temp.value} {f_temp.unit}
            </SC.TextIngredientsValue>
          </SC.FermentationWrapper>

          <SC.MashingWrapper>
            <SC.TextProperty>Mashing temperature</SC.TextProperty>
            <SC.TextIngredientsValue>
              {mash_temp[0].temp.value} {mash_temp[0].temp.unit} for{" "}
              {mash_temp[0].duration} minutes
            </SC.TextIngredientsValue>
          </SC.MashingWrapper>
        </SC.InfoContainer>
      </SC.Container>
    </SC.BeerRecipe>
  );
}
