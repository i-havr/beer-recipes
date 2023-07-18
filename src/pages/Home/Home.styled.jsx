import styled from "styled-components";

export const Home = styled.main`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 70px);

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

  & > h2 {
    margin-top: 24px;
    font-size: 12px;
    text-align: center;
    color: rgba(255, 255, 255, 0.87);
  }
`;
