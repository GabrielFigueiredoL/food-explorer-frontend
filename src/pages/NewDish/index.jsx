import { useState } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import {
  Container,
  InputContainer,
  DishImage,
  Select,
  DishItens,
  TextArea,
  DishSection,
  Form,
} from "./styles"
import { PiCaretLeft, PiUploadSimple } from "react-icons/pi"
import TextButton from "../../components/TextButton"
import SideMenu from "../../components/SideMenu"
import Input from "../../components/Input"
import Button from "../../components/Button"
import DishItem from "../../components/DishItem"
import { api } from "../../service/api"
import { useNavigate } from "react-router-dom"

function NewDish() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [image, setImage] = useState()
  const [name, setName] = useState("")
  const [category, setCategory] = useState("meal")
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")

  const navigate = useNavigate()

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    )
  }

  function handleAddImage(event) {
    const file = event.target.files[0]
    setImage(file)
  }

  async function handleAddDish() {
    await api
      .post(
        "/dishes",
        {
          name,
          category,
          ingredients,
          price,
          description,
          dishImage: image,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(() => {
        alert("prato criado com sucesso")
        navigate("/")
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possivel cadastrar")
        }
      })
  }

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      <Form>
        <TextButton title="voltar" icon={PiCaretLeft} onClick={() => navigate(-1)} />

        <h1>Novo prato</h1>

        <DishSection>
          <InputContainer>
            <label>Imagem do prato</label>
            <DishImage>
              <label htmlFor="dishImage">
                <PiUploadSimple />
                Selecione imagem
                <input onChange={handleAddImage} id="dishImage" type="file" />
              </label>
            </DishImage>
          </InputContainer>

          <InputContainer className="grow">
            <label htmlFor="">Nome</label>
            <Input
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex.: Salada Ceasar"
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="">Categoria</label>
            <Select
              onChange={(e) => setCategory(e.target.value)}
              name="categorys"
            >
              <option value="meal">Refeição</option>
              <option value="dessert">Sobremesa</option>
              <option value="drink">Bebida</option>
            </Select>
          </InputContainer>
        </DishSection>

        <DishSection>
          <InputContainer>
            <label htmlFor="">Ingredientes</label>
            <DishItens>
              {ingredients.map((ingredient, index) => (
                <DishItem
                  value={ingredient}
                  key={String(index)}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />
              ))}
              <DishItem
                $isNew
                placeholder="Adicionar"
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
              />
            </DishItens>
          </InputContainer>

          <InputContainer>
            <label htmlFor="">Preço</label>
            <Input
            type="number"
              onChange={(e) => setPrice(e.target.value)}
              placeholder="R$ 00,00"
            />
          </InputContainer>
        </DishSection>

        <InputContainer>
          <label htmlFor="">Descrição</label>
          <TextArea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          />
        </InputContainer>

        <Button onClick={handleAddDish} title="Salvar alterações" />
      </Form>
      <Footer />
    </Container>
  )
}

export default NewDish
