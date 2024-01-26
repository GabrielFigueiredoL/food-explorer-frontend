import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  padding: 1.2rem 1.4rem;
  border-radius: 8px;
  gap: 1.4rem;
  
  > input {
    width: 100%;
    font-size: 1.6rem;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
