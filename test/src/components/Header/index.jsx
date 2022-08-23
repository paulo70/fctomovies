import { ContentHeader, Span } from "./style"
import Search from '../Search'

const Header = () => {
  return (
    <ContentHeader>
      <Span>
        fromcto movie
      </Span>
      <Search />
    </ContentHeader>
  )
}

export default Header