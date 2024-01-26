import { Container } from "./styles"

function TextButton({ title, icon: Icon, ...rest }) {
  return (
    <Container $hasIcon={!Icon} type="button" {...rest}>
      {Icon && <Icon size={32} />}
      <span>{title}</span>
    </Container>
  )
}

export default TextButton
