import { useContext } from "react"
import { SearchContext } from "../../contexts/Search"
import { Search } from "./style"
const Input = () => {
  const { value, setValue, setCurrentPage } = useContext(SearchContext)

  const handleSearch = (value) => {
    setValue(value)
    setCurrentPage(1)
  }

  return (
    <Search
      value={value}
      onChange={(e) => handleSearch(e.target.value)}
      type="search"
      placeholder="search an movie"
    />
  )
}

export default Input