import styled from "styled-components"
import { DEVICEBREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    width: 5rem;
    height: 5rem;
  }

  @media (max-width: ${DEVICEBREAKPOINTS.MD}) {
    flex-direction: column;
    padding-top: 12rem;
    min-width: ${DEVICEBREAKPOINTS.XS};
  }
`

export const EntryContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 6.4rem;
  border-radius: 10px;
  width: clamp(320px, 30%, 500px);
  justify-content: center;

  > button {
    width: 100%;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins";
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;
  }

  @media (max-width: ${DEVICEBREAKPOINTS.MD}) {
    background: none;
    width: 100%;
    h1 {
      display: none;
    }
  }
`

export const InputContainer = styled.div`
  width: 100%;

  label {
    display: inline-block;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-weight: 400;
    line-height: 100%;
  }
`
