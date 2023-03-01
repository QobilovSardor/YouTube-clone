import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {maxResults: 50},
  headers: {
    'X-RapidAPI-Key': 'd410ac1918msh2c0be54a31a4bddp1fad54jsnf4c5f74512d4',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  }
};

export const Apiservice = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options)
    return response
  },
}