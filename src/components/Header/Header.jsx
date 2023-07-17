import { useLocation } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";

import * as SC from "./Header.styled";

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <SC.Header>
      <SC.HeaderContent>
        <SC.LinkStyled to={"/"}>
          {isHomePage && <img width={32} src={logo} />}&nbsp;
          {isHomePage ? (
            <b>Beer Recipes</b>
          ) : (
            <b>
              <span
                style={{
                  marginRight: 12,
                  fontSize: 28,
                }}
              >
                &#8592;
              </span>
              Go back
            </b>
          )}
        </SC.LinkStyled>
      </SC.HeaderContent>
    </SC.Header>
  );
};
