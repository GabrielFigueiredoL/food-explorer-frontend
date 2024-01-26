import styled, { css } from "styled-components"


export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1.4rem;
  font-weight: 500;
  font-style: normal;
  font-family: "Poppins", serif;
  line-height: 2.4rem;
  justify-content: center;

  background: none;
  border: none;
  display: flex;
  align-items: center;

  ${({ $hasIcon }) =>
    $hasIcon &&
    css`
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 140%;
    `}
`