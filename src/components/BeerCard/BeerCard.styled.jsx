import styled from "styled-components";
import { Link } from "react-router-dom";

export const BeerCard = styled.div`
  margin: 10px;
`;

export const ContentCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc((100% - 100px) / 5);
  width: 220px;
  height: 460px;

  padding: 28px;
  cursor: pointer;

  color: rgba(255, 255, 255, 0.87);
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  &:hover img {
    scale: 1.5;
    rotate: 6deg;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.p`
  margin-bottom: 4px;
  font-size: 16px;
  font-family: "Montserrat-SemiBold";
`;

export const Tagline = styled.p`
  margin-bottom: 4px;
  font-size: 12px;
`;

export const Line = styled.span`
  width: 100%;
  margin-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.87);
`;

export const Description = styled.p`
  margin-bottom: 12px;
  font-size: 12px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;

  border: 1px solid transparent;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 70%;
  font-size: 14px;
`;

export const FirstBrewed = styled.p`
  font-size: 10px;
`;

export const FoodPairing = styled.li`
  font-size: 10px;
`;

export const BrewersTips = styled.p`
  font-size: 10px;
`;

export const Image = styled.img`
  /* position: absolute; */
  /* right: 32px; */
  /* bottom: 24px; */
  width: 50px;
  transition: scale 200ms ease-out, rotate 200ms ease-out;
`;

export const AlcoholContent = styled.p`
  position: absolute;
  top: 12px;
  right: -20px;

  padding: 8px;
  font-size: 10px;
  background-color: #e7500a;
  border-radius: 50%;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  /* margin: -10px; */
`;
