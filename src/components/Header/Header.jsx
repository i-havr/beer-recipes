import * as SC from "./Header.styled";

import logo from "../../assets/icons/logo.svg";

export const Header = () => {
  return (
    <SC.Header>
      <SC.HeaderContent>
        <SC.LinkStyled to={"/"}>
          <img width={32} src={logo} /> &nbsp;
          <b>Beer Recipes</b>
        </SC.LinkStyled>
      </SC.HeaderContent>
    </SC.Header>
  );
};
