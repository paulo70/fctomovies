import { Content, Paragraph } from "./style"
const Title = ({ children }) => {
  return (
    <Content>
      <Paragraph>{children}</Paragraph>
    </Content>
  )
}

export default Title