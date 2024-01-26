import Button from "../../components/Button"
import Counter from "../../components/Counter"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import TextButton from "../../components/TextButton"
import SideMenu from "../../components/SideMenu"
import Tag from "../../components/Tag"
import {
  Container,
  MainContainer,
  DishDetails,
  DishIngredients,
  ButtonContainer,
} from "./styles"
import { PiCaretLeft, PiReceipt } from "react-icons/pi"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../../service/api"
import { useAuth } from "../../hooks/auth"
import { USER_ROLE } from "../../utils/roles"

function Details() {
  const { user } = useAuth()
  const [value, setValue] = useState(0)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [data, setData] = useState()

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)
    }

    fetchDish()
  }, [])

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      {data && (
        <MainContainer>
          <TextButton
            title="voltar"
            icon={PiCaretLeft}
            onClick={() => navigate("/")}
          />
          <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="" />
          <DishDetails>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <DishIngredients>
              {data.ingredients.map((ingredient) => (
                <Tag key={ingredient.id} title={ingredient.name} />
              ))}
            </DishIngredients>
            <ButtonContainer>
              {user.role === USER_ROLE.CUSTOMER ? (
                <>
                  <Counter value={value} setValue={setValue} />
                  <Button
                    title={`pedir ∙ ${data.price.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}`}
                    icon={PiReceipt}
                  />
                </>
              ) : (
                <Button
                  title="Editar prato"
                  onClick={() => navigate(`/edit/${params.id}`)}
                />
              )}
            </ButtonContainer>
          </DishDetails>
        </MainContainer>
      )}
      <Footer />
    </Container>
  )
}

export default Details
