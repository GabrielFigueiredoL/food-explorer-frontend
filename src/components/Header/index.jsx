import {
  PiReceipt,
  PiSignOutBold,
  PiMagnifyingGlass,
  PiList,
} from "react-icons/pi"
import { useNavigate } from "react-router-dom"
import { Container, Menu, LinkButton, SignOutButton } from "./styles"

import Logo from "../Logo"
import Input from "../Input"
import { useAuth } from "../../hooks/auth"
import { USER_ROLE } from "../../utils/roles"

function Header({ onOpenMenu, onChange }) {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  const isAdmin = user.role === USER_ROLE.ADMIN
  return (
    <Container>
      <Menu onClick={onOpenMenu}>
        <PiList />
      </Menu>
      <Logo isAdmin={isAdmin} />

      <Input
        placeholder="Busque por pratos ou ingredientes"
        icon={PiMagnifyingGlass}
        onChange={(e) => onChange(e.target.value)}
      />

      {user.role === USER_ROLE.CUSTOMER ? (
        <LinkButton title="Pedidos(0)" icon={PiReceipt} />
      ) : (
        <LinkButton title="Novo prato" onClick={() => navigate("/new")} />
      )}
      <SignOutButton onClick={handleSignOut}>
        <PiSignOutBold />
      </SignOutButton>
    </Container>
  )
}

export default Header
