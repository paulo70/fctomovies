import { createContext, useState } from "react";

export const SearchContext = createContext()
SearchContext.displayName = "Searching"

const SearchContextProvider = ({ children }) => {
  const [value, setValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1)


  return (
    <SearchContext.Provider value={{
      value,
      setValue,
      currentPage,
      setCurrentPage
    }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider