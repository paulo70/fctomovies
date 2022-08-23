import axios from 'axios'

const headers = {
  "Content-Type": "application/json"
};

const API = axios.create({
  baseURL: `https://api.themoviedb.org/3/trending/movie`,
  headers,
})

console.log(API, 'POPRRS')

export const KEY = "e9da1b9b1bf2935bf963f9c98fd51e01"

export default API