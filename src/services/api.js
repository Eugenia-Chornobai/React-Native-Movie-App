import { BASE_URL, TOKEN } from "../config/apiConfig";
import axios from "axios";

export const getMovies = async (option) => {

  const options = {
    method: 'GET',
    url: `${BASE_URL}/movie/${option}?language=en-US&page=1`,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    }
  };

  try {
    const response = await axios(options);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export const getShows = async (option) => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/tv/${option}?language=en-US&page=1`,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    }
  };

  try {
    const response = await axios(options);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export const getSearchResults = async (type, query) => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/search/${type}?query=${query}&include_adult=false&language=en-US&page=1`,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    }
  };

  try {
    const response = await axios(options);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
