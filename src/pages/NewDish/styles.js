import styled from "styled-components"
import { DEVICEBREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin: 1rem 3.2rem 5rem;

  > button {
    align-self: flex-start;
  }

  > h1 {
    font-family: "Poppins";
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > button:last-child {
    width: 100%;
  }

  @media (min-width: ${DEVICEBREAKPOINTS.MD}) {
    > button:last-child {
      width: auto;
      align-self: flex-end;
    }
  }
`

export const DishSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.6rem;

  @media (min-width: ${DEVICEBREAKPOINTS.MD}) {
    flex-direction: row;

    > .grow {
      flex: 1
    }
  }
`

export const InputContainer = styled.div`
  > label {
    font-size: 1.6rem;
    display: inline-block;
    margin-bottom: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-weight: 400;
    line-height: 100%;
  }
`

export const DishImage = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  width: 100%;
  padding: 1.2rem 3.2rem;
  border-radius: 8px;

  > label {
    display: flex;
    align-items: center;
    font-family: "Poppins";
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;
    gap: 0.8rem;

    cursor: pointer;

    > input {
      display: none;
    }

    svg {
      font-size: 2.4rem;
    }
  }
`

export const Select = styled.select`
  display: block;
  flex: 1;
  padding: 1.6rem;
  flex-shrink: 0;

  font-family: "Roboto";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  border-radius: 8px;
  border: none;

  appearance: none;
  -webkit-appearance: none;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1_54)'%3E%3Cpath d='M8 10L12 14L16 10' stroke='%239C98A6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1_54'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: right 0 top 50%;

  &:focus {
    border: none;
    outline: 2px solid;
    outline-color: ${({ theme }) => theme.COLORS.LIGHT_700};
  }
`

export const DishItens = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  background-color: ${({theme})=> theme.COLORS.DARK_800};
  border-radius: 8px;
  padding: .8rem;
  width: fit-content;
`

export const TextArea = styled.textarea`
  display: block;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  width: 100%;
  padding: 1.4rem;
  resize: none;
  border: none;
  border-radius: 8px;
  min-height: 17rem;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`
