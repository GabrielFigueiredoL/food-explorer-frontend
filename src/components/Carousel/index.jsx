import { useRef } from "react"
import { Container, CarouselContainer, NavButton } from "./styles"
import CarouselCard from "../CarouselCard"
import { PiCaretLeft, PiCaretRight } from "react-icons/pi"


function Carousel({ title, dishes }) {
  const carousel = useRef(null)

  const next = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  const previous = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  return (
    <>
      {dishes.length > 0 && (
        <Container>
          <h1>{title}</h1>

          <CarouselContainer ref={carousel}>
            {dishes.map((dish) => (
              <CarouselCard
                key={dish.id}
                data={dish}
              />
            ))}

            <NavButton onClick={previous}>
              <PiCaretLeft size={40} />
            </NavButton>

            <NavButton right="true" onClick={next}>
              <PiCaretRight size={40} />
            </NavButton>
          </CarouselContainer>
        </Container>
      )}
    </>
  )
}

export default Carousel
