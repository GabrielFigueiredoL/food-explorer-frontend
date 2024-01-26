import { Container, Button } from "./styles"
import { PiPlus, PiMinus } from "react-icons/pi"

function Counter({ value, setValue }) {
  const handleCountUp = () => {
    setValue(value + 1)
  }

  const handleCountDown = () => {
    if (value != 0) {
      setValue(value - 1)
    }
  }
  return (
    <Container>
      <Button onClick={handleCountDown}>
        <PiMinus size={24} />
      </Button>
      <p>{value}</p>
      <Button onClick={handleCountUp}>
        <PiPlus size={24} />
      </Button>
    </Container>
  )
}

export default Counter
