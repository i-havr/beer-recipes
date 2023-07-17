import styled from "styled-components";

export const BeersList = styled.ul`
  top: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  margin: 16px auto 64px auto;
  /* margin-top: 800px; */
`;

export const Block = styled.li`
  display: flex;
  flex-direction: row;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
`;
