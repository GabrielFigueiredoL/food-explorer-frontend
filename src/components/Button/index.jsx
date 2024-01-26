import {Container} from './styles'

function Button({title, icon: Icon, ...rest}) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon />}
      <span>{title}</span>
    </Container>
  )
}

export default Button;