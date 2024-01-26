import styled from "styled-components"

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  height: 100vh;
  position: absolute;
  z-index: 2;
  grid-area: none;
  display: none;
  width: 100%;

  &[data-menu-is-open="true"] {
    display: grid;
    grid-template-rows: min-content 1fr min-content;
  }
`

export const MenuButtonContainer = styled.div`
  padding: 6rem 2.8rem 3rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  font-family: "Roboto";
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  display: flex;
  align-items: center;
  gap: 1.6rem;

`

export const Button = styled.button`
  border: none;
  background: none;

`

export const MainMenu = styled.div`
  margin: 3.6rem 2.8rem 1.2rem;

  > ul {
    margin-top: 3.6rem;

    li {
      display: block;
      padding: 1rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: "Poppins";
      font-size: 24px;
      font-style: normal;
      font-weight: 300;
      line-height: 140%;
      border-bottom: 1px solid ${({theme})=> theme.COLORS.DARK_1000}
    }
  }
`
