import axios from "axios";
import qs from "qs";

const defaultParams = {
  apiKey: process.env.REACT_APP_OMDB_API_KEY
};

export const fetchMovies = (type, searchKeyword = "one") =>
  axios.get(
    `${process.env.REACT_APP_OMDB_API_HOST}?${qs.stringify({
      ...defaultParams,
      s: searchKeyword,
      type
    })}`
  );

export {};
