import styled from "styled-components";
import { Link } from "react-router-dom"
import { DEVICEBREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2.4rem;
  text-align: center;

  background: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 8px;

  flex-shrink: 0;
  position: relative;
  width: 300px;

  > img {
    width: 17rem;
    height: 17rem;
    border-radius: 50%;
  }

  > button {
    font-family: "Poppins";
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    background: none;
    border: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  > p {
    max-width: 25rem;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  h3 {
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.TINT_CAKE_200};
    font-family: "Roboto";
  }

  @media (max-width: ${DEVICEBREAKPOINTS.MD}) {
    gap: 1.2rem;
    width: 21rem;

    > img {
      width: 8.8rem;
      height: 8.8rem;
    }

    > h2 {
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;
    }

    > p {
      display: none;
    }

    > h3 {
      font-size: 1.6rem;
      line-height: 100%;
    }
  }
`

export const FavButton = styled.div`
  position: absolute;
  right: 2rem;
  background: none;
  border: none;
  cursor: pointer;

  > svg {
    font-size: 2.4rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  width: 100%;

  > button {
    width: 100%
  }

  @media (max-width: ${DEVICEBREAKPOINTS.MD}){ 
    flex-direction: column
  }
`

