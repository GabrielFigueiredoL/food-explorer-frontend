import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: .3rem 1.6rem;
  gap: 0.8rem;

  background-color: ${({ theme, $isNew }) =>
    $isNew ? "none" : theme.COLORS.LIGHT_500};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: ${({ theme, $isNew }) =>
    $isNew ? `1px dashed ${theme.COLORS.LIGHT_100}` : "none"};

  border-radius: 8px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > input {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: none;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`
