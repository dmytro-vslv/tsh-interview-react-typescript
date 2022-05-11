import axios from "axios";
import { queryParameters } from "redux/slices/productsSlice";

export const fetchData = async (queryParameters: queryParameters) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const queryString = new URLSearchParams(queryParameters).toString();
  const response = await axios.get(`${API_URL}${queryString}`);
  return response.data;
};
