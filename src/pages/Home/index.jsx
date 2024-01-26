import { Container, MainCard } from "./styles"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

import ingredients from "../../assets/ingredients.png"
import Carousel from "../../components/Carousel"
import SideMenu from "../../components/SideMenu"
import { useState, useEffect } from "react"
import { api } from "../../service/api"

function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?name=${search}`)
      setDishes(response.data)
    }

    fetchDishes()
  }, [search])

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)} onChange={setSearch} />
      <main>
        {!search && (
          <MainCard>
            <img src={ingredients} alt="" />
            <div>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </MainCard>
        )}
        <Carousel
          title="Refeições"
          dishes={dishes.filter((item) => item.category == "meal")}
        />
        <Carousel
          title="Sobremesas"
          dishes={dishes.filter((item) => item.category == "dessert")}
        />
        <Carousel
          title="Bebidas"
          dishes={dishes.filter((item) => item.category == "drink")}
        />
      </main>
      <Footer />
    </Container>
  )
}

export default Home
