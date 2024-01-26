import styled, { css } from "styled-components"
import { DEVICEBREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  margin-bottom: 4.8rem;
  position: relative;

  > h1 {
    display: inline-block;
    margin-bottom: 2rem;

    font-family: "Poppins";
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @media (max-width: ${DEVICEBREAKPOINTS.MD}) {
    padding-left: 2.4rem;

    > h1 {
      font-size: 1.8rem;
    }
  }
`

export const CarouselContainer = styled.div`
  display: flex;
  gap: 2rem;
  overflow: auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const NavButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  margin-inline: 3rem;

  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);

  ${(props) =>
    props.right === "true"
      ? css`
          right: 0;
        `
      : css`
          left: 0;
        `}

  @media (max-width: ${DEVICEBREAKPOINTS.MD}) {
    display: none
  }
`
