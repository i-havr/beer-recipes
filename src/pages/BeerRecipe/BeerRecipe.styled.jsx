import styled from "styled-components";

export const BeerRecipe = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  background: linear-gradient(
    60deg,
    rgba(84, 58, 183, 1) 0%,
    rgba(0, 172, 193, 0.8) 100%
  );
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h1`
  color: rgba(255, 255, 255, 0.87);

  margin-top: 48px;
  text-align: center;
  font-family: "Montserrat-Semibold";
  font-size: 48px;
`;

export const Tagline = styled.p`
  color: rgba(255, 255, 255, 0.87);
  margin: 12px 0 48px 0;
  text-align: center;
  font-size: 24px;
`;

export const Line = styled.span`
  width: 80%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.87);
`;

export const Description = styled.p`
  margin: 48px 0;
  padding: 0 64px;
  text-align: center;
  font-size: 24px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 48px 0;
  /* background-color: black; */
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: flex-start; */
  padding: 0 100px;
`;

export const TextProperty = styled.p`
  font-family: "Montserrat-Semibold";
  font-size: 24px;
  text-transform: uppercase;
`;

export const TextValue = styled.p`
  font-size: 48px;
  text-align: end;
  color: rgba(255, 255, 255, 0.87);
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 30%;
  padding: 0 100px;
`;

export const FoodPairingWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
`;

export const FoodPairing = styled.ul`
  font-size: 32px;
  line-height: 1.2;
`;

export const BeerImage = styled.img`
  width: 200px;
`;

export const BrewersTips = styled.p`
  margin: 48px 0;
  padding: 0 64px;
  font-size: 32px;
  text-align: center;
  color: rgba(255, 255, 255, 0.87);
`;

export const InfoWrapper = styled.div`
  display: flex;
  padding: 64px 0;
`;

export const TitleSection = styled.h3`
  margin-bottom: 48px;
  font-family: "Montserrat-Semibold";
  font-size: 36px;
  text-align: center;
  color: rgba(255, 255, 255, 0.87);
  text-transform: uppercase;
`;

export const TextIngredientsValue = styled.p`
  margin-bottom: 48px;
  font-size: 36px;
  text-align: start;
  color: rgba(255, 255, 255, 0.87);
`;

export const FermentationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 64px 0; */
`;

export const MashingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 64px 0; */
`;
