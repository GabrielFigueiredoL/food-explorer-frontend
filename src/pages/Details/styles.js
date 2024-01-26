import styled from "styled-components"
import { DEVICEBREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
`

export const MainContainer = styled.main`
  margin: 1.6rem 5.6rem 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  > button {
    align-self: flex-start;
  }

  > img {
    width: 26rem;
    height: 26rem;
    border-radius: 50%;
  }

  @media (min-width: ${DEVICEBREAKPOINTS.MD}) {
    flex-direction: row;
    gap: 0;

    > img {
      height: 39rem;
      width: 39rem;
      margin-right: 4.6rem;
    }
  }
`

export const DishDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  gap: 2.4rem;

  > h1 {
    font-family: "Poppins";
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }

  > p {
    font-family: "Poppins";
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  @media (min-width: ${DEVICEBREAKPOINTS.MD}) {
    align-items: start;
    text-align: left;

    > h1 {
      font-size: 4rem;
    }

    > p {
      font-size: 2.4rem;
    }
  }
`

export const DishIngredients = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  justify-content: center;

  @media (min-width: ${DEVICEBREAKPOINTS.MD}) {
    justify-content: start;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1.6rem;

  button:nth-child(2) {
    padding: 0.8rem 4rem;

    > svg {
      font-size: 2rem;
    }

    > span {
      font-size: 0.9rem;
      font-weight: 500;
      line-height: 1.6rem;
    }
  }

  @media (min-width: ${DEVICEBREAKPOINTS.MD}) {
    gap: 3rem;
    button:nth-child(2) {
      padding: 1.2rem 2.4rem;

      > svg {
        display: none;
      }

      > span {
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;
      }
    }
  }
`
