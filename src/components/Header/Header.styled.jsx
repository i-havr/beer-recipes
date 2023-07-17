import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  height: 70px;
  margin-left: auto;
  margin-right: auto;
  padding: 16px 0px;
  color: rgba(255, 255, 255, 0.87);
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const HeaderContent = styled.div`
  max-width: 1280px;
  width: calc(100% - 64px);
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: calc(100% - 256px);
  }

  & > button {
    position: static;
    margin-left: 48px;
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  /* margin: 0; */
  color: rgba(255, 255, 255, 0.87);
  font-size: 20px;
  text-decoration: none;
`;
