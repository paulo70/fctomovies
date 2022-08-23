import React, { useState, useEffect } from "react";
import { Tabs, Tab, Content } from "./style";
import ListMovies from '../ListMovies'
import axios from "axios";

const key = "e9da1b9b1bf2935bf963f9c98fd51e01"
const requestWeek = `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`
const requestDay = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`


const TabContent = () => {
  const [active, setActive] = useState(0);
  const [day, setDay] = useState([])
  const [week, setWeek] = useState([])


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

  console.log(week, 'semana')

  useEffect(() => {
    if (active === 1) {
      handleFetchWeek()
      console.log('entrei no if?')
    }

    console.log('carreguei depois?')

  }, [active])


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