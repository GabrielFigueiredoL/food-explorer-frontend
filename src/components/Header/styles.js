import styled from "styled-components"
import { DEVICEBREAKPOINTS } from "../../styles/deviceBreakpoints"
import Button from "../Button"

export const Container = styled.header`
  display: flex;
  gap: 3.2rem;
  align-items: center;
  padding: 2.4rem 12rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > p {
    font-size: 2.4rem;
  }

  @media (max-width: ${DEVICEBREAKPOINTS.MD}) {
    gap: 0;
    padding: 5.6rem 2.8rem 2.4rem;
    justify-content: space-between;

    div:nth-child(3) {
      display: none;
    }
  }
`

export const Menu = styled.button`
  background: none;
  border: none;
  display: none;

  > svg {
    font-size: 2.5rem;
  }

  @media (max-width: ${DEVICEBREAKPOINTS.MD}) {
    display: block;
  }
`

export const LinkButton = styled(Button)`
  flex-shrink: 0;
  > svg {
    font-size: 3.2rem;
  }

  @media (max-width: ${DEVICEBREAKPOINTS.MD}) {
    background: none;
    padding: 0;

    > span {
      display: none;
    }
  }
`

export const SignOutButton = styled.button`
  border: none;
  background: none;
  font-size: 3.2rem;
  flex-shrink: 0;

  @media (max-width: ${DEVICEBREAKPOINTS.MD}) {
    display: none;
  }
`
