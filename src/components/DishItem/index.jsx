import { PiPlus, PiX } from "react-icons/pi";
import { Container } from "./styles";

function DishItem({ $isNew, value, onClick, ...rest }) {
  
  return (
    <Container $isNew={$isNew}>
      <input type="text" value={value} readOnly={!$isNew} {...rest} />
      <button
        type="button"
        onClick={onClick}
        className={$isNew ? "button-add" : "button-delete"}
      >
        {$isNew ? <PiPlus /> : <PiX />}
      </button>
    </Container>
  )
}

export default DishItem;