import { useState } from "react"
import Button from "../Button"
import Counter from "../Counter"
import { Container, ButtonsContainer, FavButton } from "./styles"
import { PiHeart, PiCaretRight, PiPencilSimple } from "react-icons/pi"
import { api } from "../../service/api"
import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"
import { USER_ROLE } from "../../utils/roles"

function CarouselCard({ data }) {
  const { user } = useAuth()
  const [value, setValue] = useState(0)
  const { name, description, price, image } = data

  const navigate = useNavigate()

  const dishURL = image
    ? `${api.defaults.baseURL}/files/${image}`
    : AvatarPlaceholder

  function handleEditButton() {
    if (user.role === USER_ROLE.CUSTOMER) {
      return (
        <FavButton>
          <PiHeart />
        </FavButton>
      )
    } else {
      return (
        <FavButton
          onClick={() => navigate(`/edit/${data.id}`, { state: { data } })}
        >
          <PiPencilSimple />
        </FavButton>
      )
    }
  }

  return (
    <Container>
      <img src={dishURL} alt={`imagem do prato ${name}`} />
      {handleEditButton()}
      <button onClick={() => navigate(`/details/${data.id}`)}>
        <div>{name}</div>
        <PiCaretRight />
      </button>
      <p>{description}</p>
      <h3>
        {price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </h3>

      {user.role === USER_ROLE.CUSTOMER && (
        <ButtonsContainer>
          <Counter value={value} setValue={setValue} />
          <Button title="incluir" />
        </ButtonsContainer>
      )}
    </Container>
  )
}

export default CarouselCard
