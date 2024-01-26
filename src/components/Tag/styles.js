import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins";
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding: .4rem .8rem;
  border-radius: 5px;

  background-color: ${({theme})=> theme.COLORS.DARK_1000}
`