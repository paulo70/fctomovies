import React, { useState, useEffect, useContext } from "react";
import { Tabs, Tab, Content } from "./style";
import ListMovies from '../ListMovies'
import axios from "axios";
import { SearchContext } from "../../contexts/Search";
import Title from "../Title";
import Box from '../BoxFlex'
import Loading from '../Loading'
import { KEY } from '../../service/'

const requestWeek = `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`
const requestDay = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`

const TabContent = () => {
  const [active, setActive] = useState(0);
  const [day, setDay] = useState([])
  const [week, setWeek] = useState([])
  const [loading, setLoading] = useState(true)

  const { value, currentPage } = useContext(SearchContext)

  const searching = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${encodeURIComponent(
    value
  )}&page=${currentPage}`


  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }

    if (active !== 1) {
      handleFetchWeek()

    }
  };

  const handleFetchWeek = () => {
    const fecthWeek = async () => {
      try {
        setLoading(true)
        const request = await axios.get(requestWeek)
        const response = request.data.results
        setWeek(response)
      } catch (error) {
        console.log(error, 'error')
      }

    }

    fecthWeek()
    setLoading(false)
  }

  useEffect(() => {
    const fecthDay = async () => {

      try {
        setLoading(true)
        const request = await axios.get(requestDay)
        const response = request.data.results
        setDay(response)
      } catch (error) {
        console.log(error, 'ERROR')
      }
    }

    fecthDay()
    setLoading(false)

  }, [])


  useEffect(() => {
    if (active === 1) {
      handleFetchWeek()
    }
  }, [active])

  useEffect(() => {

    const fetchSearch = async () => {
      if (value !== "") {

        try {
          setLoading(true)
          const request = await axios.get(searching)

          setDay((previous => currentPage === 1 ? request.data.results : [...previous, request.results]))
          setWeek((previous => currentPage === 1 ? request.data.results : [...previous, request.results]))

        } catch (error) {
          console.log(error)
        }
      }
    }

    fetchSearch()
    setLoading(false)

  }, [value, currentPage, searching])


  return (
    <>

      <Box>
        {loading && <Loading />}
      </Box>
      <Title>{value ? `Resultados para: ${value}` : "Escolha seu filme para semana ou diário"}</Title>
      <Tabs>
        <Tab onClick={handleClick} active={active === 0} id={0}>
          Filmes por dia
        </Tab>

        <Tab onClick={handleClick} active={active === 1} id={1}>
          Filmes por semana
        </Tab>
      </Tabs>
      <>
        <Content active={active === 0}>
          {day.map(movies => (
            <ListMovies {...movies} key={movies.id} />
          ))}
        </Content>
        <Content active={active === 1}>
          {week.map(movies => (
            <ListMovies {...movies} key={movies.id} />
          ))}
        </Content>
      </>
    </>
  )
}

export default TabContent