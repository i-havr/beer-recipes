import styled from "styled-components";

export const Home = styled.main`
  display: flex;
  width: 100%;
  min-height: 100vh;

  background: linear-gradient(
    60deg,
    rgba(84, 58, 183, 1) 0%,
    rgba(0, 172, 193, 1) 100%
  );
`;

export const Container = styled.div`
  /* position: sticky;
  top: 15%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  /* padding-top: 40px; */
  /* padding-bottom: 40px; */

  & > h2 {
    margin-top: 24px;
    font-size: 12px;
    text-align: center;
  }
`;
