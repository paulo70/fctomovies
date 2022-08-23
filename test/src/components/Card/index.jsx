import { CardWrapper, CardBody } from "./style"
const Card = ({ children }) => {
  return (
    <CardWrapper>
      <CardBody>
        {children}
      </CardBody>
    </CardWrapper>
  )
}

export default Card