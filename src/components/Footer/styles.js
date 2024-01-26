import styled from "styled-components"
import { DEVICEBREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem 12rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  font-size: 1.4rem;
  font-family: "Roboto";
  font-weight: 400;
  line-height: 160%;
  color: ${({ theme }) => theme.COLORS.LIGHT_200};

  > div > p,
  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
  }

  @media (max-width: ${DEVICEBREAKPOINTS.MD}) {
    font-family: "DM Sans";
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 2.4rem 2rem;
  }
`
