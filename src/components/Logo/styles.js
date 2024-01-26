import styled from "styled-components"
import { PiHexagonFill } from "react-icons/pi"
import { DEVICEBREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  min-width: fit-content;

  font-size: 2.4rem;
  font-weight: 700;
  position: relative;

  > span {
    color: ${({theme}) => theme.COLORS.TINT_CAKE_200};
    font-family: "Roboto";
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    position: absolute;
    right: 0;
    bottom: -50%
  }

  @media (max-width: ${DEVICEBREAKPOINTS.MD}) {
    font-size: 2rem;
  }
`

export const IconHexagon = styled(PiHexagonFill)`
  color: ${({ theme }) => theme.COLORS.TINT_CAKE_100};
  width: 3rem;
  height: 3rem;

  @media (max-width: ${DEVICEBREAKPOINTS.MD}) {
    width: 2.4rem;
    height: 2.4rem;
  }
`
