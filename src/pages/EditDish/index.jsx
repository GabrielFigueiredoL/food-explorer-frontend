import { useEffect, useState } from "react"
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
  ButtonContainer,
} from "./styles"
import { PiCaretLeft, PiUploadSimple } from "react-icons/pi"
import TextButton from "../../components/TextButton"
import SideMenu from "../../components/SideMenu"
import Input from "../../components/Input"
import Button from "../../components/Button"
import DishItem from "../../components/DishItem"
import { api } from "../../service/api"
import { useNavigate, useParams } from "react-router-dom"

function EditDish() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [image, setImage] = useState(null)
  const [name, setName] = useState("")
  const [category, setCategory] = useState("meal")
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")

  const navigate = useNavigate()
  const dish = useParams()

  useEffect(() => {
    async function loadDishData() {
      const response = await api.get(`/dishes/${dish.id}`)
      const { name, category, ingredients, price, description} = response.data

      const ingredientsNames = ingredients.map((ingredient) => ingredient.name)
      setName(name)
      setCategory(category)
      setIngredients(ingredientsNames)
      setPrice(price)
      setDescription(description)
    }

    loadDishData()
  }, []);

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
      .patch(
        `/dishes/${dish.id}`,
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
        alert("prato atualizado com sucesso")
        navigate("/")
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possivel atualizar")
        }
      })
  }

  async function handleDelete() {
    await api
      .delete(`dishes/${dish.id}`)
      .then(() => {
        alert("prato excluido com sucesso")
        navigate("/")
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possivel excluir o prato")
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
        <TextButton
          title="voltar"
          icon={PiCaretLeft}
          onClick={() => navigate(-1)}
        />

        <h1>Editar prato</h1>

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
              value={name}
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="">Categoria</label>
            <Select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value={"meal"}>Refeição</option>
              <option value={"dessert"}>Sobremesa</option>
              <option value={"drink"}>Bebida</option>
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
              value={price}
            />
          </InputContainer>
        </DishSection>

        <InputContainer>
          <label htmlFor="">Descrição</label>
          <TextArea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            value={description}
          />
        </InputContainer>

        <ButtonContainer>
          <Button onClick={handleDelete} title="Excluir prato" />
          <Button onClick={handleAddDish} title="Salvar alterações" />
        </ButtonContainer>
      </Form>
      <Footer />
    </Container>
  )
}

export default EditDish
