import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.TINT_TOMATO};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 1.2rem 3.2rem;
  font-family: "Poppins";
  font-weight: 500;
  line-height: 2.4rem;
  border: none;
  border-radius: 5px;

  > svg {
    font-size: 3.2rem
  }
`