import styled from "styled-components"
import { DEVICEBREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100vw;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
  overflow-x: hidden;
  > main {
    padding-inline: 12rem;
  }

  @media (max-width: ${DEVICEBREAKPOINTS.MD}) {
    > main {
      padding-inline: 0;
    }
  }
`

export const MainCard = styled.div`
  background: ${({ theme }) => theme.COLORS.GRADIENT_200};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  display: flex;
  justify-content: end;

  margin: 16rem 0 6rem;

  position: relative;
  padding: 9rem 10rem 9rem;
  border-radius: 8px;

  font-family: "Poppins";

  > div > h1 {
    font-size: 4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }

  > div > p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
  }

  > img {
    position: absolute;
    left: -5.5rem;
    bottom: 0;
  }

  @media (max-width: ${DEVICEBREAKPOINTS.MD}) {
    padding: 3.6rem 2.1rem 2.2rem 15rem;
    margin: 4.4rem 1.6rem 6.2rem 3.6rem;

    > div {
      text-align: start;

      > h1 {
        font-family: "Poppins";
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 600;
        line-height: 140%;
      }
      > p {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 140%;
      }
    }

    img {
      width: 19rem;
      height: 14rem;
      left: -3rem;
    }
  }
`
