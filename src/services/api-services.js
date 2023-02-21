// import { Axios } from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_PUBLIC_KEY,
    'X-RapidAPI-Host': BASE_URL
  }
};


export const Apiservice = {
  async fetching() {},
}