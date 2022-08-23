import React, { useState, useEffect, useContext } from "react";
import { Tabs, Tab, Content } from "./style";
import ListMovies from '../ListMovies'
import axios from "axios";
import { SearchContext } from "../../contexts/Search";

const key = "e9da1b9b1bf2935bf963f9c98fd51e01"
const requestWeek = `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`
const requestDay = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`

const TabContent = () => {
  const [active, setActive] = useState(0);
  const [day, setDay] = useState([])
  const [week, setWeek] = useState([])

  const { value, currentPage } = useContext(SearchContext)

  const searching = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${encodeURIComponent(
    value
  )}&page=${currentPage}`


  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }

    if (active !== 1) {
      console.log('é 1')
      handleFetchWeek()

    }
  };

  const handleFetchWeek = () => {
    const fecthWeek = async () => {
      try {
        const request = await axios.get(requestWeek)
        const response = request.data.results
        setWeek(response)
        console.log(response, 'day')
      } catch (error) {
        console.log(error, 'error')
      }

    }

    fecthWeek()
  }

  useEffect(() => {
    const fecthDay = async () => {

      try {
        const request = await axios.get(requestDay)
        const response = request.data.results
        setDay(response)
        console.log(response, 'week')
      } catch (error) {
        console.log(error, 'ERROR')
      }
    }

    fecthDay()

  }, [])


  useEffect(() => {
    if (active === 1) {
      handleFetchWeek()
      console.log('entrei no if?')
    }

    console.log('carreguei depois?')

  }, [active])

  useEffect(() => {

    const fetchSearch = async () => {
      if (value !== "") {
        console.log("buscando...")

        try {
          const request = await axios.get(searching)

          setDay((previous => currentPage === 1 ? request.data.results : [...previous, request.results]))
          setWeek((previous => currentPage === 1 ? request.data.results : [...previous, request.results]))

        } catch (error) {
          console.log(error)
        }
      }
    }

    fetchSearch()

  }, [value, currentPage, searching])


  return (
    <>
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