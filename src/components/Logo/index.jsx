import { Container, IconHexagon } from "./styles"

function Logo({ isAdmin }) {
  return (
    <Container>
      <IconHexagon />
      <p>food explorer</p>
      {isAdmin && <span>admin</span>}
    </Container>
  )
}

export default Logo
