import axios from "axios";

const API_URL = "http://localhost:5000/api/items";

export const getItems = () => axios.get(API_URL);
export const createItem = (item) => axios.post(API_URL, item);
export const updateItem = (id, updatedItem) =>
  axios.put(`${API_URL}/${id}`, updatedItem);
export const deleteItem = (id) => axios.delete(`${API_URL}/${id}`);
