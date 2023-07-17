import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  top: 15px;
  right: 10%;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 18px;
  font-size: 12px;

  line-height: 1.22;
  color: rgba(255, 255, 255, 0.87);
  font-family: "Montserrat-Medium";

  background-color: #e7500a;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-color: transparent;
  border-radius: 10.3108px;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    width: 60px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;
