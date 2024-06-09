import axios from "axios";

const API_URL = "http://localhost:5000/api/orders";
export const saveOrder = ({ items, totalCost }) =>
  axios.post(API_URL, { items, totalCost });
export const getOrders = () => axios.get(API_URL);
