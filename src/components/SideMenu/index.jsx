import { Container, Button, MenuButtonContainer, MainMenu } from "./styles"
import Footer from "../Footer"
import Input from "../Input"
import { PiX, PiMagnifyingGlass } from "react-icons/pi"

function SideMenu({ menuIsOpen, onCloseMenu }) {
  return (
    <Container data-menu-is-open={menuIsOpen}>
      <MenuButtonContainer>
        <Button onClick={onCloseMenu}>
          <PiX size={24} />
        </Button>
        <p>Menu</p>
      </MenuButtonContainer>
      <MainMenu>
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={PiMagnifyingGlass}
        />
        <ul>
          <li>Sair</li>
        </ul>
      </MainMenu>
      <Footer />
    </Container>
  )
}

export default SideMenu
